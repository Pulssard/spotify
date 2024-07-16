import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate();

  return (
    <div  className='w-[100%] h-[100%] bg-green-700 flex flex-col justify-center items-center gap-1'>
    <h1 className='mb-12'>Log in, or create an account</h1>
        <button className='w-72 h-11 rounded-full bg-black px-4 py-2 text-white' onClick={() => navigate('/register')}>Register</button>
        <button className='w-72 h-11 rounded-full bg-green-500 px-4 py-2 text-white' onClick={() => navigate('/login')}>Log In</button>
    </div>
  )
}

export default SignIn;