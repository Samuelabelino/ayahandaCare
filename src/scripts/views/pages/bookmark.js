import FavoriteRecipeIdb from '../../data/bookmark-recipe-idb';
import { createBookmarkItemTemplate } from '../templates/template-creator';

const Bookmark = {
  async render() {
    return `
    <div class="bookmark-container">
      <h2><i class="fa-solid fa-bookmark icon-title"></i> Bookmarked Recipe</h2>
      <div class="bookmark-message"></div>
        <div class="recipe-content bookmark-content">
          <div class="recipe-content-item">
          <div id="recipes" class="recipes"></div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const recipes = await FavoriteRecipeIdb.getAllRecipes();
    const recipesContainer = document.querySelector('#recipes');
    if (recipes == 0) {
      document.querySelector('.bookmark-message').innerHTML += '<h4>Your Bookmark is Empty!</h4>';
    } else {
      recipes.forEach((recipe) => {
        recipesContainer.innerHTML += createBookmarkItemTemplate(recipe);
      });
    }
  },
};

export default Bookmark;
