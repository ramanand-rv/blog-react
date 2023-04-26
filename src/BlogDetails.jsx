import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch  from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const { data: blog, loading, error } = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+id, {
            method: "DELETE"
        })
        .then(()=>{
            nav('/');
        })
    }

    return (

        <div className="blog-details">
            {loading && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}

        </div>
    )
}

export default BlogDetails
