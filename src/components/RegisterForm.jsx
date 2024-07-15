import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

const RegisterForm = () => {
const [usernameValue, setUsernameValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const [repeatPasswordValue, setRepeatPasswordValue] = useState('');
const [invalidInput, setInvalidInput] = useState(false);

const {setIsLoggedIn, setUserLogged} = useContext(PlayerContext);

const navigate = useNavigate();

const handleRegister = (e) => {
  if(passwordValue === repeatPasswordValue){
    const newUser = {
      username: usernameValue,
      password: passwordValue,
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setUserLogged(usernameValue);
    setIsLoggedIn(true);
    navigate('/');
  }  else {
    e.preventDefault();
    setInvalidInput(true);
  }
}

  return (
    <form className='bg-black h-[100%] flex flex-col gap-1 justify-center items-center'>
    <h2 className='text-white mb-5'> Register a new account</h2>
        <input onChange={(e) => setUsernameValue(e.target.value)} className={`  bg-white border-2 rounded w-72 h-10 border-green-700 py-2 px-3 ${invalidInput ? 'invalid-input' : ''}`} placeholder='Username' type='text'/>
        <input onChange={(e) => setPasswordValue(e.target.value)} className={`bg-white border-2 rounded w-72 h-10 border-green-700 py-2 px-3 ${invalidInput ? 'invalid-input' : ''}`} placeholder='Password' type='password'/>
        <input onChange={(e) => setRepeatPasswordValue(e.target.value)} className={`bg-white border-2 rounded w-72 h-10 border-green-700 py-2 px-3 ${invalidInput ? 'invalid-input' : ''}`} placeholder='Repeat password' type='password'/>
        {invalidInput && <p className='text-red-400 p-2 '>Invalid inputs. Please try again!</p>}
        <button  onClick={handleRegister} className='bg-white rounded w-48 h-10'>Register</button>
    </form>
  )
}

export default RegisterForm