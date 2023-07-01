import { useState, useEffect } from 'react';
import { useAppContext } from '../AppContext';

import Header from './Header';
import RecipeCard from './RecipeCard';

const Home = () => {
  const { recipes, setRecipes } = useAppContext();
  const [filterSearch, setFilterSearch] = useState('');
  const [filterType, setFilterType] = useState(null);
  const [sortedRecipes, setSortedRecipes] = useState([...recipes]);
  // Fitler comes here + Add Recipe button

  // Cards
  useEffect(() => {
    if (!filterType) return;

    if (filterSearch === '') setSortedRecipes([...recipes]);
    else
      setSortedRecipes(
        recipes.filter((recipe) => {
          if (filterType === 'ingredients') {
            const mappedIngredients = recipe.ingredients
              .map((item) => item.name.toLowerCase())
              .join(', ');

            return mappedIngredients.includes(filterSearch);
          }
          return recipe[filterType].toLowerCase().includes(filterSearch);
        })
      );
  }, [filterSearch, filterType]);
  return (
    <div>
      <Header
        setFilterSearch={setFilterSearch}
        filterSearch={filterSearch}
        setFilterType={setFilterType}
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
      ;
    </div>
  );
};

export default Home;
