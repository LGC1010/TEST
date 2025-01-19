import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main.tsx';
import Login from '../pages/Login.tsx';
import { useAuthStore } from '../stroe/userStore';
import { RouteProps } from '../types/type';
import SignUp from '../pages/SignUp.tsx';
import MyPage from '../pages/MyPage.tsx';

const PrivateRoute: React.FC<RouteProps> = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <Element {...rest} /> : <Navigate to='/Login' />;
};

const PublicRoute: React.FC<RouteProps> = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuthStore();
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to='/MyPage' />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/Login' element={<PublicRoute element={Login} />} />
        <Route path='/SignUp' element={<PublicRoute element={SignUp} />} />
        <Route path='/MyPage' element={<PrivateRoute element={MyPage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
