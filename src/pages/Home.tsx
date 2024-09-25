
// import '../styles/Home.css';
import homeStyles from '../styles/Home.module.css';
import blog from '../data/blog.json';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

function Home() { 
  return <>  
      <Header /> 
      <main className={ homeStyles.main }>
        <div className= {homeStyles.container }>
          {blog.map((blog) =>  (
            <Link to={`/details/${blog.id}`}>
              <PostCard key={blog.id} id={blog.id} title={ blog.title } content={ blog.content } />
            </Link>
          ))}
        
            
      </div>

      </main>


  </>

}

export default Home;
