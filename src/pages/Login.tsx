import { SetStateAction, useState } from 'react';
import { useLoginMutation } from '../quries/useGetUserQuery';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassWord] = useState('');

  const handleId = (e: { target: { value: SetStateAction<string> } }) => {
    setId(e.target.value);
  };
  const handlePassWord = (e: { target: { value: SetStateAction<string> } }) => {
    setPassWord(e.target.value);
  };

  const { mutate } = useLoginMutation();

  return (
    <div className='h-screen/90 flex justify-center items-center'>
      <form
        className='rounded-3xl bg-white pt-12 pb-12 w-w/500 flex flex-col align items-center justify-center'
        onSubmit={(e) => {
          e.preventDefault();
          mutate({ id: id, password: password });
        }}
      >
        <h2 className='mb-8 text-4xl'>Login</h2>
        <input
          className='w-96 mb-9 border-slate-400 py-3 px-4 rounded-3xl border pd-2'
          value={id}
          type='text'
          onChange={handleId}
          placeholder='ID'
        />
        <input
          className='w-96 mb-8 border-slate-400 py-3 px-4 rounded-3xl border pd-2'
          value={password}
          type='password'
          onChange={handlePassWord}
          placeholder='PSW'
        />
        <button className='w-40 mb-4 text-white bg-[#9cbfdb] py-3 px-4 border pd-2' type='submit'>
          Login In
        </button>
      </form>
    </div>
  );
};

export default Login;
