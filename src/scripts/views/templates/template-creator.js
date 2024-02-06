import CONFIG from '../../globals/config';

const createRecipeItemTemplate = (recipe) => `

<div class="recipe-box">
  <img class="lazyload" src="${recipe.image}" alt="${recipe.title}">
  <div class="food-info">
    <a href="${`/#/detail/${recipe.id}`}">${recipe.title}</a>
    <div class="food-facts">
      <button class = "health-fact">Healthy ${recipe.healthScore}%</button>
      <button class = "serve-fact">${recipe.servings} Servings</button>
    </div>
    <h5>${recipe.summary}</h5>
    <div class="food-calories">
      <span>${recipe.nutrition.nutrients
    .filter((nutrient) => nutrient.name === 'Calories')
    .map((nutrient) => `${parseInt(nutrient.amount)}`).join('')} kkal</span>
    </div>
  </div>
</div>

`;

const createRecipeDetailTemplate = (recipe) => `
  <!-- headline -->
  <section id="content">
    <article class="headline">
      <figure class="headline-figure">
        <img class="food-image lazyload" src="${recipe.image}" alt="${recipe.title}">
      </figure>
      <div class="headline-content">
        <h1 class="headline-title">${recipe.title}
        </h1>
        <p class="headline-author">From <a href="${recipe.sourceUrl}">${recipe.sourceUrl}</a></p>
        <div id="saveButtonContainer" class="food-action"></div>
        <p class="headline-description">${recipe.summary}
        </p>
      </div>
    </article>
  </section>

  <!-- material -->
  <section id="material">
    <div class="row-material">
      <div class="col">
        <h1 class="ingredients-title">Ingredients</h1>
        <img class="food-ingredients-image lazyload" data-src="${CONFIG.BASE_URL}recipes/${recipe.id}/ingredientWidget.png?${CONFIG.API_KEY}" alt="Ingredients">
      </div>
      <div class="col">
        <h1 class="equipments-title">Equipments</h1>
        <img class="food-equipments-image lazyload" data-src="${CONFIG.BASE_URL}recipes/${recipe.id}/equipmentWidget.png?${CONFIG.API_KEY}" alt="Equipments">
      </div>
    </div>
  </section>

  <!-- information -->
  <section class="information">
    <div class="row-instruction">
      <div class="col">
        <h1 class="instruction-title">Instruction</h1>
        <p>${recipe.analyzedInstructions
    .map(
      (instruction) => `
                    <ol>${instruction.steps
    .map(
      (step) => `
                    <li>${step.step}</li>`,
    ).join('')}</ol>
                    `,
    ).join('')}
                </p>
      </div>
      <div class="col">
        <h1 class="nutrients-title">Nutrients</h1>
        <div class="button">
          <button class="gray">Protein : ${parseInt(recipe.nutrition.caloricBreakdown.percentProtein)}%</button>
          <button class="red">Fat : ${parseInt(recipe.nutrition.caloricBreakdown.percentFat)}%</button>
          <button class="yellow">Carbohydrats : ${parseInt(recipe.nutrition.caloricBreakdown.percentCarbs)}%</button>
        </div>
        <img class="lazyload" data-src="${CONFIG.BASE_URL}recipes/${recipe.id}/nutritionLabel.png?${CONFIG.API_KEY}" alt="Nutrition Label">
      </div>
    </div>
  </section>
  `;

const createBookmarkItemTemplate = (recipe) => `
  <div class="recipe-box">
  <img class="lazyload" src="${recipe.image}" alt="${recipe.title}">
  <div class="food-info">
    <a href="${`/#/detail/${recipe.id}`}">${recipe.title}</a>
    <div class="food-facts">
      <button class = "health-fact">Healthy ${recipe.healthScore}%</button>
      <button class = "serve-fact">${recipe.servings} Servings</button>
    </div>
    <h5>${recipe.summary}</h5>
  </div>
  </div>
`;

const createSaveButtonTemplate = () => `
  <button class="food-button-like" id="saveButton">
    <i class="far fa-bookmark icon"></i> Save Recipe
  </button>
`;

const createSavedButtonTemplate = () => `
  <button class="food-button-like" id="saveButton">
    <i class="fa-solid fa-bookmark icon"></i> Unsave Recipe
  </button>
`;

const createSkeletonItemTemplate = (count) => {
  let template = '';
  for (let i = 0; i < count; i++) {
    template += `
        <div class="recipe-box">
            <img src="./../public/img/food-1-small.jpg">
            <div class="food-info">
              <h2>Lorem Ipsum</h2>
              <button>Healthy</button>
              <button>Servings</button>
              <h5>The recipe The Best Chili is ready in about 2 hours and 10 minutes and is definitely a spectacular
                gluten free and dairy free option for lovers of American food. For $2.01...</h5>
              <div class="food-calories">
                <span>Calories</span>
              </div>
            </div>
        </div>
    `;
  }

  return template;
};

const createSkeletonDetailTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
    <h2 class="food-title skeleton">How to make a healthy food</h2>
    <img class="food-image lazyload" data-src="./etc/placeholder.png" alt="skeleton">
  
    <div class="food-information skeleton">    
      <p class="food-source skeleton">from www.pinkwhen.com</p>
      <p class="food-type skeleton">Food Type : lunch main course main dish dinner</p>
      <div id="saveButtonContainer" class="food-action skeleton"></div>
    </div>
  
    <div class="food-fact skeleton">
      <h4 class="skeleton"></h4>
      <table>
        <tr>
          <td class="food-fact-value skeleton">10</td>
          <td class="food-fact-value skeleton">10</td>
          <td class="food-fact-value skeleton">10</td>
          <td class="food-fact-value skeleton">10</td>
        </tr>
        <tr>
          <td class="food-fact-title"><i class="skeleton></i> Health Score</td>
          <td class="food-fact-title"><i class="skeleton"></i> Weight Watcher Points</td>
          <td class="food-fact-title"><i class="skeleton"></i> Ready In Minutes</td>
          <td class="food-fact-title"><i class="skeleton"></i> Servings</td>
        </tr>
      </table>
    </div>
    `;
  }
  return template;
};

const createSkeletonBookmarkTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
    <div class="recipe-box">
        <img class="food-item-image lazyload" data-src="./etc/placeholder.png" alt="skeleton"> 
            <div class="food-info">
              <h2>Lorem Ipsum</h2>
              <button>Healthy</button>
              <button>Servings</button>
              <h5>The recipe The Best Chili is ready in about 2 hours and 10 minutes and is definitely a spectacular
                gluten free and dairy free option for lovers of American food. For $2.01...</h5>
              <div class="food-calories">
                <span>Calories</span>
              </div>
            </div>
    </div>
    `;
  }

  return template;
};

export {
  createRecipeItemTemplate,
  createRecipeDetailTemplate,
  createBookmarkItemTemplate,
  createSaveButtonTemplate,
  createSavedButtonTemplate,
  createSkeletonItemTemplate,
  createSkeletonBookmarkTemplate,
  createSkeletonDetailTemplate,
};
