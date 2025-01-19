import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stroe/userStore';

const Main = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <button className='w-44 mt-4 text-white bg-[#9cbfdb] py-3 px-4 border pd-2 mr-4' onClick={handleLogout}>
            로그아웃
          </button>
          <button
            className='w-44 mt-4 text-white bg-[#9cbfdb] py-3 px-4 border pd-2'
            onClick={() => navigate('/Mypage')}
          >
            마이페이지
          </button>
        </div>
      ) : (
        <div>
          <button
            className='w-44 mt-4 text-white bg-[#9cbfdb] py-3 px-4 border pd-2 mr-4'
            onClick={() => navigate('/login')}
          >
            로그인 하러가기
          </button>
          <button
            className='w-44 mt-4 text-white bg-[#9cbfdb] py-3 px-4 border pd-2 mr-4'
            onClick={() => navigate('/Signup')}
          >
            회원가입 하러가기
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
