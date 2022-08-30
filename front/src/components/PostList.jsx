import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import PostItem from './PostItem';
import postExamples from '../json/postExamples.json';

function PostList() {

  // const user = JSON.parse(localStorage.getItem('user'));

  // const navigate = useNavigate();

  // const URI = 'http://localhost:8000/posts';

  // const [allPosts, setAllPosts] = useState([]);

  // useEffect(() =>{
  //   getAllPosts();
  // },[]);

  // const getAllPosts = async (e) => {
  //   // e.preventDefault();
  //   await axios.get(URI).then(result => {
  //     console.log(result);
  //     setAllPosts(result);
  //   })
  //   .catch(error => console.log(error))
  //   navigate('/home');
  // }

  return (
    <ul className='flex flex-col gap-8 mb-24'>
      {
        postExamples.map(post => (
          <PostItem key={post.id} post={post}/>
        ))
      }
    </ul>
  )
}

export default PostList;