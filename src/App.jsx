import { Routes, Route } from 'react-router-dom';
import GlobalStyle from '@styles/GlobalStyles';
import Start from '@routes/Start';
import Login from '@routes/Login';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
    
  )
}

export default App
