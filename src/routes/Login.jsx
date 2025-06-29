import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, isLoggedIn } from '@utils/auth';
import * as S from '@styles/style.js';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(id, password)) {
      alert('환영합니다!');
      navigate('/', { replace: true });
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const loginKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <S.Wrapper>
      <S.Box>
        <S.Title>🦁 로그인 🦁</S.Title>
        <S.Input
          type="text"
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={loginKeyDown}
        />
        <S.Button onClick={handleLogin}>로그인 🥰</S.Button>
      </S.Box>
    </S.Wrapper>
  );
}

export default Login;
