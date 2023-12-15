import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const BlogDetail = () => {
    const param = useParams()
    const url = `http://localhost:3000/blogs/${param.id}`
    const {data: blog, loading, error} = useFetch(url);
    const navigate = useNavigate();

    useEffect(() => {
        if(error) {
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }, [error, navigate])
  return (
    <div className="container mx-auto">
        {error && <div className="text-red-500">{ error }</div>}
        {loading && <div>{ loading }</div>}  
        {blog && 
            <div>
                <div className="my-3">
                    <Link to='/' className="py-1 px-5 border border-teal-500 rounded-md text-[17px] hover:bg-teal-500 hover:text-white">Back</Link>
                </div>
                <h1 className="text-[20px] text-teal-500 font-bold">{blog.title}</h1>
                <p className="text-orange-400 italic">Posted By - {blog.author}</p>
                <p className="text-gray-700">{blog.body}</p>
            </div>
        }
    </div>
  );
}

export default BlogDetail;
