import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './components/Home';
import Recipe from './components/Recipe';

function App() {
  return (
    <>
      <h1>Organi.co</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
