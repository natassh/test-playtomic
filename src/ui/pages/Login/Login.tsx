import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Store/modules/user/actions';
import './Login.css';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(signIn({
      user,
      password
    }));
  };

  const handleOnUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleOnPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit} className="LoginForm">
        <input type="text" name="user" value={user} placeholder="Email" onChange={handleOnUser}  />
        <input type="password" name="password" value={password} placeholder="Password" onChange={handleOnPassword} />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export {Login};