import { v4 as uuid } from 'uuid';
import { useRef, useEffect } from 'react';
import { useAppContext } from '../AppContext';

import './moda.scss';

const NewRecipeModal = ({ setIsModalOpen }) => {
  const { setRecipes } = useAppContext();
  const formRef = useRef(null);
  const nameInputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData(formRef.current);
    const storedRecipes =
      JSON.parse(localStorage.getItem('stored-recipes')) ?? [];

    console.log(storedRecipes);

    const recipe = {};
    for (const entry of formData.entries()) recipe[entry[0]] = entry[1];

    recipe.id = uuid();
    recipe.steps = recipe.steps.split('\n');

    setRecipes((recipes) => [...recipes, recipe]);
    localStorage.setItem(
      'stored-recipes',
      JSON.stringify([...storedRecipes, recipe])
    );

    setIsModalOpen(close);
  };

  useEffect(() => nameInputRef.current.focus(), []);
  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">New Recipe</h2>
          <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="close-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form className="habit-form" onSubmit={handleFormSubmit} ref={formRef}>
          <label className="full-w">
            <span className="label-text">Name</span>
            <input
              className="form-input"
              name="name"
              required
              ref={nameInputRef}
            />
          </label>
          <label className="full-w">
            <span className="label-text">Image URL</span>
            <input className="form-input" name="imageURL" />
          </label>
          <label className="full-w">
            <span className="label-text">Cuisine</span>
            <input className="form-input" name="cuisine" required />
          </label>
          <label className="full-w">
            <span className="label-text">Ingredients</span>
            <input className="form-input" name="ingredients" required />
          </label>
          <label className="full-w">
            <span className="label-text">Cooking Instructions</span>
            <textarea className="form-input textarea" name="steps" required />
          </label>
          <div className="full-w btn-row">
            <button
              type="button"
              className="modal-btn --discard"
              onClick={() => setIsModalOpen(false)}
            >
              Discard
            </button>
            <button type="submit" className="modal-btn --submit">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="overlay" />
    </>
  );
};

export default NewRecipeModal;
