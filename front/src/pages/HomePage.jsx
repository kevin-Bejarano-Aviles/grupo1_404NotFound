import Header from '../components/Header';
import NewState from '../components/NewState';
import PostList from '../components/PostList';

function HomePage() {
  return (
    <div>
      <Header />
      <NewState />
      <PostList />
      {/** Navbar creado por Sofi */}
    </div>
  )
}

export default HomePage;
