import BlogList from './BlogList';
import useFetch from './useFetch';


const url = 'http://localhost:8000/blogs';


function Home() {

  const { data: blogs, loading, error } = useFetch(url);


  return (
    <div className='home'>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}

    </div>
  )
}

export default Home
