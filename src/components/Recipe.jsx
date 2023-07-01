import { useParams } from 'react-router';

import { useAppContext } from '../AppContext';

const Recipe = () => {
  const { recipeId } = useParams();
  const { recipes } = useAppContext();

  const singleRecipe = recipes.find(({ id }) => id === recipeId);

  const { name, cuisine, ingredients, steps, imageURL } = singleRecipe;

  return (
    <div className="single-recipe-card">
      <div className="img-container">
        <img src={imageURL} alt={name} />
      </div>
      <div className="details-container">
        <h2>{name}</h2>
        <p className="cuisine">Cuisine: {cuisine}</p>

        <p>
          <strong>Ingredients:</strong> {ingredients}
        </p>
        <ul className="steps">
          <strong>Steps</strong>
          {steps.map((step, key) => (
            <li key={key}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
