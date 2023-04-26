import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('MS Dhoni');
    const[pending, isPending] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (event)=>{
        event.preventDefault();
        const blog = {title, body, author};

        isPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST', 
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('New Blog Added');
            isPending(false);
            navigate('/');
        })
    }
  return (
    <div className='create'>
        <h2>Add a New Blog</h2>
        <form>
            <label>Blog Title:</label>
            <input type="text" required 
            value={title}
            onChange={(e)=> setTitle(e.target.value)} />
            <label>Blog Body:</label>
            <textarea required
            value={body}
            onChange={(e)=> setBody(e.target.value)}> </textarea>
            <label>Blog Author:</label>
            <select
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}>
                <option value="MS Dhoni">MS Dhoni</option>
                <option value="Virat Kohli">Virat Kohli</option>
                <option value="Narendra Modi">Narendra Modi</option>
                <option value="Bhuvi Kumar">Bhuvi Kumar</option>
                <option value="Smriti Mandhana">Smriti Mandhana</option>
                <option value="Harleen Deol">Harleen Deol</option>
                <option value="Renuka Thakur">Renuka Thakur</option>
            </select>
            {!pending && <button disabled={!title || !body} onClick={handleSubmit}>Add Blog</button>}
            {pending && <button disabled>Adding Blog....</button>}
        </form>

    </div>
  )
}

export default Create