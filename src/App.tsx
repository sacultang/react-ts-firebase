import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useState, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { auth } from './firebase';

function App() {
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [isCreate, setIsCreate] = useState(false);

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPw(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCreate((prev) => !prev);
  };

  // 회원 가입할때
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCreate) {
      createUserWithEmailAndPassword(auth, email, pw)
        .then(() => {
          alert('회원가입 성공');
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      signInWithEmailAndPassword(auth, email, pw)
        .then(() => {
          alert('로그인 성공');
        })
        .catch((e) => {
          alert(e);
        });
    }
  };
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div className='App'>
      {userInfo ? (
        <div>
          {' '}
          로그인 상태 입니다
          <button onClick={handleLogOut}>로그아웃</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            onChange={handleEmail}
            value={email}
          />
          <input type='password' name='pw' onChange={handlePw} value={pw} />
          <button type='submit'>{isCreate ? '만들기' : '로그인'}</button>
          <button type='button' onClick={handleClickCreate}>
            {isCreate ? '취소' : '회원가입'}
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
