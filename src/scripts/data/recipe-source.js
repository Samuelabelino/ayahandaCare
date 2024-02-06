import API_ENDPOINT from '../globals/api-endpoint';

class SpoonacularSource {
  static async popularRecipes(offset) {
    const response = await fetch(API_ENDPOINT.RECIPE_POPULARITY(offset));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async getTotalRecipe(filterkey) {
    const response = await fetch(API_ENDPOINT.RECIPE_TOTAL(filterkey));
    const responseJson = await response.json();
    return responseJson.totalResults;
  }

  static async getAllRecipe(filterkey) {
    const response = await fetch(API_ENDPOINT.RECIPE_FILTER(filterkey));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailRecipe(id) {
    const response = await fetch(API_ENDPOINT.RECIPE_DETAIL(id));
    return response.json();
  }
}

export default SpoonacularSource;
