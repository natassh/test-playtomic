import React, {useState} from 'react';
//Hook useDispach que nos devuelve la función dispach similar a la del fichero actionCreator
import { useDispatch } from 'react-redux';
import { signIn } from '../../Store/modules/user/actions';
import './Login.css';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  
  const handleOnSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log({user});
    console.log({password});
    //  a la función dispatch, le pasamos  nuestra acción, que en este caso neceista un  objeto con el user y el password
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
    <div className="App cw">
      <form onSubmit={handleOnSubmit} className="LoginForm">
        <input type="text" name="user" value={user} placeholder="Email" onChange={handleOnUser}  />
        <input type="password" name="password" value={password} placeholder="Password" onChange={handleOnPassword} />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export {Login};