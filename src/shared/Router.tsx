import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import { useAuthStore } from '../stroe/userStore';
import { RouteProps } from '../types/type';
import SignUp from '../pages/SignUp';
import MyPage from '../pages/MyPage';

const PrivateRoute: React.FC<RouteProps> = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <Element {...rest} /> : <Navigate to='/login' />;
};

const PublicRoute: React.FC<RouteProps> = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuthStore();
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to='/mypage' />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<PublicRoute element={Login} />} />
        <Route path='/Signup' element={<PublicRoute element={SignUp} />} />
        <Route path='/Mypage' element={<PrivateRoute element={MyPage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
