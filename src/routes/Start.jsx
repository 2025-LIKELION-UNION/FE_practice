import { useNavigate } from 'react-router-dom';
import { logout, isLoggedIn } from '@utils/auth';
import { useEffect, useState } from 'react';
import * as S from '@styles/style.js';

function Start() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  const handleAuthClick = () => {
    if (loggedIn) {
      logout();
      setLoggedIn(false);
      alert('로그아웃 되었어요!');
    } else {
      navigate('/login');
    }
  };

  return (
    <S.Wrapper>
      <S.Box>
        <S.Title>🦁 2025 연합 세션 🦁</S.Title>
        <S.Subtitle>
          {loggedIn ? '로그인된 상태예요. 로그아웃하시겠어요?' : '로그인하고 시작해볼까요?'}
        </S.Subtitle>
        <S.Button onClick={handleAuthClick}>
          {loggedIn ? '로그아웃 😴' : '로그인하러 가기 🚀'}
        </S.Button>
      </S.Box>
    </S.Wrapper>
  );
}

export default Start;
