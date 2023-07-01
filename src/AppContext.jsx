import { useState, useContext, createContext } from 'react';
import { v4 as uuid } from 'uuid';

import { STANDARD_RECIPES } from './constants';

const AppContext = createContext({});

const recipesWithIDs = STANDARD_RECIPES.map((recipe) => ({
  ...recipe,
  ingredients: recipe.ingredients
    .map(({ name, quantity }) => `${name} x ${quantity}`)
    .join(', '),
  id: uuid(),
}));

const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(recipesWithIDs);

  const contextValue = { recipes, setRecipes };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
