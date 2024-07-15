import React, {useContext, useState} from 'react'
import { PlayerContext } from '../context/PlayerContext';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

const {setIsLoggedIn} = useContext(PlayerContext);

const [usernameValue, setUsernameValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const [invalidInput, setInvalidInput] = useState(false);
const navigate = useNavigate();

const handleLogin = (e) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const matchingUser = users.find(user => user.username === usernameValue && user.password === passwordValue);
  if(matchingUser) {
    setIsLoggedIn('true');
    localStorage.setItem('userLogged', usernameValue);
    navigate('/');
  } else {
    e.preventDefault();
    setInvalidInput(true);
    return;
  }
}

  return (
    <form className='bg-black h-[100%] flex flex-col gap-1 justify-center items-center'>
    <h2 className='text-white mb-5'> Log In </h2>
        <input onChange={(e) => setUsernameValue(e.target.value)} className={`bg-white border-2 rounded w-72 h-10 border-green-700 ${invalidInput ? 'invalid-input' : ""}`} placeholder='Username' type='text'/>
        <input onChange={(e) => setPasswordValue(e.target.value)} className={`bg-white border-2 rounded w-72 h-10 border-green-700 ${invalidInput ? 'invalid-input' : ""}`} placeholder='Password' type='password'/>
{invalidInput && <p className='text-red-400 p-2 '>Invalid inputs. Please try again!</p>}
        <button onClick={handleLogin} className='bg-white rounded w-48 h-10'>Log In</button>
    </form>
  )
}

export default LogIn;