import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NonExistPage from './pages/NonExistPage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const App = () => {
  const { logout } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={ <CallLogout logout={logout} /> } />
        <Route path="*" element={<NonExistPage/>} />
      </Routes>
    </>
  );
};
export default App;

function CallLogout({logout}) {
  logout();
}