import React, { useEffect, useState } from 'react'
import detailsStyles from '../styles/Details.module.css';
import homeStyles from '../styles/Home.module.css';
import Header from '../components/Header';
import blog from '../data/blog.json';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { detailId } =useParams<{ detailId: string }>();
  const [titles, setTitle] = useState<{ id:String; title:string; content:string} | null>(null);


  useEffect(() => {
    const fetchRecord = () => {
        const fetchedRecord = blog.find(blog =>blog.id.toString() === detailId)
        //setTitle(fetchedRecord || null);

    };

    fetchRecord();
  }, [detailId]);

  if(!titles){
    return <div>Blog Not</div>
  }
  
  return (
    <>
    <Header />
    <main className={ homeStyles.main }>
      <div className= {homeStyles.container }>
        <div>
            
        
        <h2>  blog.id  </h2>
        <div className='detailsStyle.detailsDescription'>
                        Here is my text
        </div>
        </div>
          
    </div>

    </main>


</>
  )
}
