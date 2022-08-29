import Header from '../components/Header';
import NewState from '../components/NewState';
import PostList from '../components/PostList';
import Layout from '../components/Layout';
import { useRef } from 'react';




function HomePage() {
  const postSection = useRef(null)
  return (
    <div className='flex flex-col gap-8 pt-28 p-4 min-h-screen bg-pastelgray'>
        <Header />
      <div ref={postSection}>
        <NewState />
      </div>
      <PostList />
      <Layout section={postSection}/>
    </div>
  )
}

export default HomePage;
