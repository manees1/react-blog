import React, { useEffect, useState } from 'react';
import detailsStyles from '../styles/Details.module.css';
import homeStyles from '../styles/Home.module.css';
import Header from '../components/Header';
import blog from '../data/blog.json';
import { useParams } from 'react-router-dom';

interface Blog {
  id: string | number; // Allow both string and number types
  title: string;
  content: string;
  author?: string;
  created_at?: string;
}

export default function Details() {
  const { detailId } = useParams<{ detailId: string }>();
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchRecord = () => {
      // Convert `id` to string for comparison with `detailId`
      const fetchedRecord = blog.find(b => b.id.toString() === detailId);
      setSelectedBlog(fetchedRecord || null);
    };

    fetchRecord();
  }, [detailId]);

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Header />
      <main className={homeStyles.main}>
        <div className={homeStyles.container}>
          <div>
            {/* Display blog title and content */}
            <h2>{selectedBlog.title}</h2>
            <div className={detailsStyles.detailsDescription}>
              {selectedBlog.content}
            </div>
            <p><strong>Author:</strong> {selectedBlog.author}</p>
            <p><strong>Published on:</strong> {selectedBlog.created_at}</p>
          </div>
        </div>
      </main>
    </>
  );
}
