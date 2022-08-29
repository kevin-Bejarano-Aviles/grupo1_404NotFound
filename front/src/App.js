import { Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LogIn';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import UserListProfile from './pages/UserListProfile'
function App() {
  return (
    <div className='text-pastelblack'>
      <Routes>
        <Route path={'/'} element={<WelcomePage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/sign-up'} element={<SignUpPage />} />
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/profile'} element={<ProfilePage />} />
        <Route path={'/user-list-profile'} element={<UserListProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
