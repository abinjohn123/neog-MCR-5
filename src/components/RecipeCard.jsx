import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { id, name, cuisine, imageURL } = recipe;
  const navigate = useNavigate();

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
    </div>
  );
};

export default RecipeCard;
