import CONFIG from './config';

const API_ENDPOINT = {
  RECIPE_POPULARITY: (offset) => `${CONFIG.BASE_URL}recipes/complexSearch?sort=popularity&addRecipeNutrition=true&addRecipeInformation=true&number=24&offset=${offset}&${CONFIG.API_KEY}`,
  RECIPE_FILTER: (filterkey) => `${CONFIG.BASE_URL}recipes/complexSearch?addRecipeNutrition=true&addRecipeInformation=true&${filterkey}${CONFIG.NUMBER_PAGE}&${CONFIG.API_KEY}`,
  RECIPE_TOTAL: (filterkey) => `${CONFIG.BASE_URL}recipes/complexSearch?${filterkey}${CONFIG.API_KEY}`,
  RECIPE_DETAIL: (id) => `${CONFIG.BASE_URL}recipes/${id}/information?includeNutrition=true&${CONFIG.NUMBER_PAGE}&${CONFIG.API_KEY}`,
};

export default API_ENDPOINT;
