import UrlParser from '../../routes/url-parser';
import SpoonacularSource from '../../data/recipe-source';
import SaveButtonInitiator from '../../utils/save-button-initiator';
import {
  createRecipeDetailTemplate,
  createSkeletonDetailTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="recipe-container">
        <div class="content detail-page">
          <div class="content-main">
            <div id="recipe" class="recipe">${createSkeletonDetailTemplate(1)}</div>
          </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const recipe = await SpoonacularSource.detailRecipe(url.id);
    const recipeContainer = document.querySelector('#recipe');
    recipeContainer.innerHTML = createRecipeDetailTemplate(recipe);

    SaveButtonInitiator.init({
      saveButtonContainer: document.querySelector('#saveButtonContainer'),
      recipe: {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        healthScore: recipe.healthScore,
        nutrients: recipe.nutrition.nutrients,
        servings: recipe.servings,
        summary: recipe.summary,
      },
    });
  },
};

export default Detail;
