import React, {useState} from 'react';
//Hook useDispach que nos devuelve la función dispach similar a la del fichero actionCreator
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
    //  a la función dispatch, le pasamos  nuestra acción, que en este caso neceista un  objeto con el user y el password
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