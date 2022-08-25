import Header from '../components/Header';
import NewState from '../components/NewState';
import PostList from '../components/PostList';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <div className='flex flex-col gap-8 pt-28 p-4 min-h-screen bg-pastelgray'>
      <Header />
      <NewState />
      <PostList />
      <Layout />
    </div>
  )
}

export default HomePage;
