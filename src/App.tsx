import React, {useState} from 'react';
import firebase from "firebase/app"; //Es el core y mínimo para que funcione
import "firebase/auth"; // Este es el servicio de autorization para hacer login
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyAIJCNiLFFcSBSJjN0KtabxocQ4c7Qy4pA",
  authDomain: "test-playtomic-e8907.firebaseapp.com",
  projectId: "test-playtomic-e8907",
  storageBucket: "test-playtomic-e8907.appspot.com",
  messagingSenderId: "460421782890",
  appId: "1:460421782890:web:a22a7acd984a8dafa4d913"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log({user});
    console.log({password});
    
    // Manejar la excepción
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(
        user,
        password
      );
      console.log('Login en Firebase correcto: ', response);
    } catch(error) {
      console.log('Login en Firebase ha fallado');
    }
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
}

export default App;
