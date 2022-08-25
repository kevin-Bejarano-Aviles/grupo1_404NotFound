import Header from '../components/Header';
import NewState from '../components/NewState';
import PostList from '../components/PostList';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <div>
      <Header />
      <NewState />
      <PostList />
      <Layout />
    </div>
  )
}

export default HomePage;
