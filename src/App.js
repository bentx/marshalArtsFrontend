import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import { useRoutes } from 'react-router-dom';
import route from './route';
import Nav from './pages/nav';

function App() {
  const element = useRoutes(route);
  return (
    <div className='App'>
      <div style={{ position: 'fixed', width: '100%', zIndex: '99999' }}>
        <Nav />
      </div>
      <div style={{ paddingTop: '40px' }}>{element}</div>
    </div>
  );
}

export default App;
