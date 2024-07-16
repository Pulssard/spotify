import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import Input from './Input';

const RegisterForm = () => {
const [usernameValue, setUsernameValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const [repeatPasswordValue, setRepeatPasswordValue] = useState('');
const [invalidInput, setInvalidInput] = useState(false);

const {setIsLoggedIn} = useContext(PlayerContext);

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
    localStorage.setItem('userLogged', usernameValue);
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
        <Input handleChange={setUsernameValue} invalidInput={invalidInput} placeholder='Username' type="text" />
        <Input handleChange={setPasswordValue} invalidInput={invalidInput} placeholder='Password' type='password' />
        <Input handleChange={setRepeatPasswordValue} invalidInput={invalidInput} placeholder='Repeat Password' type='password' />
        {invalidInput && <p className='text-red-400 p-2 '>Invalid inputs. Please try again!</p>}
        <button  onClick={handleRegister} className='bg-white rounded w-48 h-10'>Register</button>
        <p className='text-white text-xs my-2'>Have an Account? <span className=' underline cursor-pointer' onClick={() => navigate('/login')}> Log In!</span></p>
    </form>
  )
}

export default RegisterForm