import { Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<WelcomePage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/sign-up'} element={<SignUpPage />} />
        <Route path={'/sign-user'} element={<Layout/>}>
          <Route path={'home'} element={<HomePage />} />
          <Route path={'profile'} element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
