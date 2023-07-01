import { useAppContext } from '../AppContext';

import RecipeCard from './RecipeCard';
const Home = () => {
  const { recipes, setRecipes } = useAppContext();
  // Fitler comes here + Add Recipe button

  // Cards
  return (
    <div>
      <div className="recipe-cards-container">
        {recipes.map((recipe, key) => (
          <RecipeCard recipe={recipe} key={key} />
        ))}
      </div>
      ;
    </div>
  );
};

export default Home;
