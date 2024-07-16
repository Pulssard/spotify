import {useContext, useState} from 'react'
import { PlayerContext } from '../context/PlayerContext';
import { useNavigate } from 'react-router-dom';
import  Input  from './Input';

const LogIn = () => {

const {setIsLoggedIn} = useContext(PlayerContext);

const [usernameValue, setUsernameValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const [invalidInput, setInvalidInput] = useState(false);
const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem('users'));
  let matchingUser;
  if(users) {
    matchingUser = users.find(user => user.username === usernameValue && user.password === passwordValue);
  }

  if(matchingUser) {
    setIsLoggedIn('true');
    localStorage.setItem('userLogged', usernameValue);
    navigate('/');
  } else {
    setInvalidInput(true);
    return;
  }
}

  return (
    <form className='bg-black h-[100%] flex flex-col gap-1 justify-center items-center'>
    <h2 className='text-white mb-5'> Log In </h2>
        <Input onChange={setUsernameValue} invalidInput={invalidInput} placeholder='Username' type='text'/>
        <Input onChange={setPasswordValue} invalidInput={invalidInput} placeholder='Password' type='password'/>
        {invalidInput && <p className='text-red-400 p-2 '>Invalid inputs. Please try again!</p>}
        <button onClick={handleLogin} className='bg-white rounded w-48 h-10'>Log In</button>
        <span className='text-white underline cursor-pointer m-2' onClick={() => navigate('/register')}> Create an Account </span>
    </form>
  )
}

export default LogIn;