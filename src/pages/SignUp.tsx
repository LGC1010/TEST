import { SetStateAction, useState } from 'react';
import { useJoinMutation } from '../quries/useGetUserQuery';

const SignUp = () => {
  const [id, setId] = useState('');
  const [password, setPassWord] = useState('');
  const [nickname, setName] = useState('');
  const { mutate } = useJoinMutation();

  const handleId = (e: { target: { value: SetStateAction<string> } }) => {
    setId(e.target.value);
  };
  const handlePassWord = (e: { target: { value: SetStateAction<string> } }) => {
    setPassWord(e.target.value);
  };
  const handleName = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value);
  };

  return (
    <div className='h-screen/90 flex justify-center items-center'>
      <div className='min-h-96 rounded-3xl bg-white pt-12 pb-12 w-w/500 flex flex-col align items-center justify-center'>
        <h2 className='text-4xl mb-4'>회원가입</h2>
        <form
          className=' bg-white pt-4 pb-4 w-w/500 flex flex-col align items-center justify-center'
          onSubmit={(e) => {
            e.preventDefault();
            mutate({ id, password, nickname });
          }}
        >
          <input
            className='w-64 mb-4 rounded-3xl text-base text-center border-slate-400 py-2 px-2 border pd-2'
            type='text'
            value={id}
            placeholder='아이디'
            onChange={handleId}
          />
          <input
            className='w-64 mb-4 rounded-3xl text-base text-center border-slate-400 py-2 px-2 border pd-2'
            type='password'
            value={password}
            placeholder='비밀번호'
            onChange={handlePassWord}
          />
          <input
            className='w-64 mb-4 rounded-3xl text-base text-center border-slate-400 py-2 px-2 border pd-2'
            type='text'
            value={nickname}
            placeholder='닉네임'
            onChange={handleName}
          />
          <button className='w-40 mt-4 text-white bg-[#9cbfdb] py-3 px-4 border pd-2' type='submit'>
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
