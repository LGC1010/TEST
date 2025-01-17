import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import Mypage from '../pages/Profile';
import { useAuthStore } from '../stroe/userStore';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <Element {...rest} /> : <Navigate to='/login' />;
};

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuthStore();
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to='/mypage' />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<PublicRoute element={Login} />} />
        <Route path='/signup' element={<PublicRoute element={SignUp} />} />
        <Route path='/mypage' element={<PrivateRoute element={Mypage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
