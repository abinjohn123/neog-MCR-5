import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './components/Home';

function App() {
  return (
    <>
      <h1>Organico</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
