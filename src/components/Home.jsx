import { useState, useEffect } from 'react';
import { useAppContext } from '../AppContext';

import Header from './Header';
import RecipeCard from './RecipeCard';
import NewRecipeModal from './NewRecipeModa';

const Home = () => {
  const { recipes, setRecipes } = useAppContext();
  const [filterSearch, setFilterSearch] = useState('');
  const [filterType, setFilterType] = useState('name');
  const [sortedRecipes, setSortedRecipes] = useState([...recipes]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Fitler comes here + Add Recipe button

  // Cards
  useEffect(() => {
    if (filterSearch === '') setSortedRecipes([...recipes]);
    else
      setSortedRecipes(
        recipes.filter((recipe) =>
          recipe[filterType].toLowerCase().includes(filterSearch)
        )
      );
  }, [filterSearch, filterType, recipes]);
  return (
    <div>
      <Header
        setFilterSearch={setFilterSearch}
        filterSearch={filterSearch}
        setFilterType={setFilterType}
        setIsModalOpen={setIsModalOpen}
        filterType={filterType}
      />
      <div className="recipe-cards-container">
        {sortedRecipes.length === 0 && (
          <p className="no-recipe-msg">
            No matching recipes found. Please try another filter
          </p>
        )}
        {sortedRecipes.map((recipe, key) => (
          <RecipeCard recipe={recipe} key={key} />
        ))}
      </div>
      {isModalOpen && <NewRecipeModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Home;
