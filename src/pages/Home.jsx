import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const url = 'http://localhost:3000/blogs';
  const { data : blogs, loading, error } = useFetch(url);
  return (
    <div className='container mx-auto space-y-5'>
       {error && <div className='text-red-500'>{ error }</div>}
       {loading && <div>{ loading }</div>}
       { blogs && blogs.map(blog => (
        <div key={blog.id} className='border shadow-md p-6 rounded-2xl shadow-gray-300'>
          <h1 className='text-[17px] text-teal-500'>{blog.title}</h1>
          <p className='text-slate-700 mb-3'>posted by - {blog.author}</p>
          <Link to={`/blogs/${blog.id}`} className="py-1 px-4 border border-teal-500 rounded-md text-[14px] hover:bg-teal-500 hover:text-white">Read More..</Link>
        </div>
       ))}
    </div>
  );
}

export default Home;
