import Header from '../components/Header';
import NewState from '../components/NewState';
import PostList from '../components/PostList';
import Layout from '../components/Layout';
import { useRef } from 'react';




function HomePage() {
  const postSection = useRef(null)
  console.log("esto es de home")
  console.log( JSON.parse(localStorage.getItem('user')))
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className='flex flex-col gap-8 pt-28 p-4 min-h-screen bg-pastelgray'>
        <p>{user.name}</p>
        <Header />
      <div ref={postSection}>
        <NewState />
      </div>
      <PostList />
      <Layout section={postSection}/>
      <p></p>
    </div>
  )
}

export default HomePage;
