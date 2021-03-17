import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Store/modules/user/actions';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log({user});
    console.log({password});
    dispatch(signIn({
      user,
      password
    }));
  };

  const handleOnUser = (event) => {
    setUser(event.target.value);
  };

  const handleOnPassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="App">
      
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" value={user} onChange={handleOnUser} />
        <input type="password" name="password" value={password} onChange={handleOnPassword} />
        <button>login</button>
      </form>
    </div>
  );
};

export {Login};