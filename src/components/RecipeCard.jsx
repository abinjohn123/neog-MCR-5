import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const RecipeCard = ({ recipe }) => {
  const { setRecipes } = useAppContext();
  const { id, name, cuisine, imageURL } = recipe;
  const navigate = useNavigate();

  const handleDeleteClick = (e) => {
    e.stopPropagation();

    setRecipes((recipes) => recipes.filter(({ id: eachId }) => eachId !== id));
  };

  return (
    <div className="recipe-card" onClick={() => navigate(`/recipe/${id}`)}>
      <div className="img-container">
        <img src={imageURL} alt={name} />
      </div>
      <h3>{name}</h3>

      <ul className="features">
        <li>
          <p>Cuisine</p>
          <p>{cuisine}</p>
        </li>
        <li>
          <p>Ingredients</p>
          <p>{'>'} View </p>
        </li>
        <li>
          <p>Instructions</p>
          <p>{'>'} View </p>
        </li>
      </ul>
      <div className="delete-btn" onClick={handleDeleteClick}>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default RecipeCard;
