import FavoriteRecipeIdb from '../data/bookmark-recipe-idb';
import { createSaveButtonTemplate, createSavedButtonTemplate } from '../views/templates/template-creator';

const SaveButtonInitiator = {
  async init({ saveButtonContainer, recipe }) {
    this._saveButtonContainer = saveButtonContainer;
    this._recipe = recipe;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._recipe;

    if (await this._isRecipeExist(id)) {
      this._renderSaved();
    } else {
      this._renderSave();
    }
  },

  async _isRecipeExist(id) {
    const recipe = await FavoriteRecipeIdb.getRecipe(id);
    return !!recipe;
  },

  _renderSave() {
    this._saveButtonContainer.innerHTML = createSaveButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await FavoriteRecipeIdb.putRecipe(this._recipe);
      this._renderButton();
    });
  },

  _renderSaved() {
    this._saveButtonContainer.innerHTML = createSavedButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await FavoriteRecipeIdb.deleteRecipe(this._recipe.id);
      this._renderButton();
    });
  },
};

export default SaveButtonInitiator;
