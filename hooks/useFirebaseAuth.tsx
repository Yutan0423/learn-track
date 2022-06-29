import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const useFirebaseAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [authErr, setAuthErr] = useState('');

  const login = async () => {
    try {
      setAuthErr('');
      if (email !== '' && password !== '') {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setAuthErr('E-mail address or password is wrong.');
      console.log(err.message);
      setEmail('');
      setPassword('');
    }
  };

  const register = async () => {
    try {
      setAuthErr('');
      if (email !== '' && password !== '') {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setAuthErr(err.message);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setAuthErr('');
  };

  return {
    isLogin,
    email,
    password,
    login,
    register,
    setEmail,
    setPassword,
    toggleMode,
    authErr,
  };
};
