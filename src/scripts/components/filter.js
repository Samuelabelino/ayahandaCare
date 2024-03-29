class FilterMenu extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    const filterValue = {
      minCal: this.shadowDOM.querySelector('#min-Nutrient').value,
      maxCal: this.shadowDOM.querySelector('#max-Nutrient').value,
      minCarbs: this.shadowDOM.querySelector('#min-Carbs').value,
      maxCarbs: this.shadowDOM.querySelector('#max-Carbs').value,
      minProtein: this.shadowDOM.querySelector('#min-Protein').value,
      maxProtein: this.shadowDOM.querySelector('#max-Protein').value,
      minFat: this.shadowDOM.querySelector('#min-Fat').value,
      maxFat: this.shadowDOM.querySelector('#max-Fat').value,
      dietCheck: this.shadowDOM.querySelectorAll('[name~=diet]'),
      allergieCheck: this.shadowDOM.querySelectorAll('[name~=allergie]'),
      typeSelect: this.shadowDOM.querySelector('[name~=type]').value,
      closeButton: this.shadowDOM.querySelector('.close'),
      messageCon: this.shadowDOM.querySelector('#emptyMessage'),
    };
    return filterValue;
  }

  render() {
    this.shadowDOM.innerHTML = `
              <style>
              .filter-box {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                  align-items: center;
                  position: sticky; 
                  z-index: 1; 
                  top: 0; 
                  left: 30;
                  overflow-x: hidden; 
                  width: 240px;
                  padding: 28px;
                  overflow: hidden; 
                  background-color: #B3CFB5;
                  margin: 30px;
                  border-radius: 15px;
              }
              
              .filter-box h1 {
                  font-size: 18px;
                  line-height: 0;
              }
              
              .filter-list {
                  padding: 8px 20px;
                  border-radius: 20px;
                  overflow: auto;
                  width: 100%;           
              }
              
              .filter-list h2 {
                  font-size: 16px;
              }
              
              .filter-list h3 {
                  font-size: 14px;
                  line-height: 0;
              }

              .filter-list .nutrient-filter div {
                  padding-bottom: 18px;
                  margin-bottom: 26px;
                  border-bottom: #389238 solid;
              }
              
              .filter-list .nutrient-filter div input {
                  padding: 8px;
                  border-radius: 5px;
                  width: 50%;
                  display: inline;
                  max-width: 80px;
                  margin-top: 5px;
                  margin-right: 8px;
                  border: none;
                  background-color: #389238;
                  
              }
            ::placeholder { 
                color: white;
                opacity: 1;
              }
            
            .range{
                color: white;
            }
            .diet-filter div {
                display: flex;
                align-items: center;
            }
            
            .allergies-filter div {
                display: flex;
                align-items: center;
            }
              .checkbox {
                  display: inline-flex;
                  align-items: center;
                  cursor: pointer;
              }
              
              .diet-filter {
                  border-bottom: #389238 solid;
                  padding-bottom: 16px;
              }
              
              
              div input[type="checkbox"] {
                  appearance: none;
                  -webkit-appearance: none;
                  min-width: 18px;
                  min-height: 18px;
                  background-color: #389238;
                  border-radius: 4px;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  outline: none;
                  margin-right: 16px;
              }
              
              div label {
                  font-size: 14px;
                  font-weight: 400;
                  cursor: pointer;
              }
              
              div input[type="checkbox"]:after {
                  content: "\\2714";
                  color: white;
                  font-weight: 800;
                  font-size: 12px;
                  display: none;
              }
              
              div input[type="checkbox"]:hover {
                  background-color: #5AB964;
              }
              
              div input[type="checkbox"]:checked {
                  background-color: #389238;
              }
              
              div input[type="checkbox"]:checked:after {
                  display: block;
              }
  
              .button-filter {
                  border: none;
                  margin-top: 20px;
                  padding: 12px 28px;
                  background-color: #5AB964;
                  cursor: pointer;
                  color: white;
                  border-radius: 20px;
                  align-items: left;
              }
  
              .button-filter:hover {
                  opacity: 80%;
              }
  
              .close {
                  color: #fff;
                  text-align: right;
                  font-size: 28px;
                  font-weight: bold;
                  width: 100%;
                  line-height: 0;
                  display: none;
              }
  
              .close:hover, .close:focus {
                  color: #000;
                  text-decoration: none;
                  cursor: pointer;
                }
  
                .type-filter {
                  width: 100%;
                }
                .type-filter h2 {
                  text-align: left;
                  font-size: 16px;
              }
  
                .type-filter select{
                  width: 200px;
                  border: none;
                  padding: 10px;
                  text-align: left;
                  cursor: pointer;
                }
  
                .type-filter select:hover {
                  outline: 1px solid #ddd;
                }
  
                .type-filter option {
                  font-size: 10pt;
                  font-family: 'Poppins', sans-serif;
                  background-color: #fff;
                  width: 100%;
                  overflow: hidden;
                }
  
                .empty-message {
                  font-size: 10pt;
                  color: #CC704B;
                  font-style: italic;
                  display: none;
                }
  
                .show-style {
                  display: block;
              }
  
              @media screen and (max-width: 550px) {
                  .filter-box {
                      background-color: #B3CFB5;
                  }
  
                  .filter-list {
                      font-size: 11pt;
                  }
  
                  .filter-list h2, .type-filter h2 {
                      font-size: 14px;
                  }
                  
                  .filter-list h3 {
                      font-size: 12px;
                      line-height: 0;
                  }
  
                  .filter-list .nutrient-filter div input {
                      border: 1px solid #d3d3d3;
                      background-color: #389238;
                  }
  
                  .type-filter select {
                      background-color: #389238;
                  }
  
                  label {
                      font-size: 10pt;
                  }
  
              }
  
              @media screen and (max-width: 650px) {
                  .filter-box {
                      margin: 0 auto;
                  }
                  .close {
                      display: block;
                  }
              }
  
              @media only screen and (min-width: 650px) and (max-width: 1200px) {
                  .filter-box {
                      margin: 0 auto;
                      width: 80%;
                      top: 0;
                  }
  
                  .filter-list {
                      display: flex;
                      justify-content: center;
                  }
                  
                  .nutrient-filter, .diet-filter, .allergies-filter {
                      width: 100%;
                      margin: 10px;
                  }
  
                  .filter-list .nutrient-filter div input {
                      max-width: 70px;
                      margin-bottom: 0;
                  }
  
                  .diet-filter {
                      border: none;
                  }
  
                  .button-filter {
                      margin-top: 0;
                  }
  
                  .filter-list .nutrient-filter div {
                      padding-bottom: 10px;
                      margin-bottom: 0;
                  }
  
                  .close {
                      display: block;
                  }               
              }
              </style>
  
              <div class="filter-box">
                  <span id="closeButton" class="close">&times;</span>
                  <h1>Filter Search</h1>
                  <div class="type-filter">
                          <h2>Food Type</h2>
                          <select name="type" id="type">
                              <option value="">All Type</option>
                              <option value="Main Course">Main Course</option>
                              <option value="Breakfast">Breakfast</option>
                              <option value="Dessert">Dessert</option>
                              <option value="Salad">Salad</option>
                              <option value="Snack">Snack</option>
                              <option value="Drink">Drink</option>
                          </select>    
                      </div>
                  <div class="filter-list">
                      <div class="nutrient-filter">
                          <h2>Nutrients</h2>
                          
                          <div>
                              <h3>Calories</h3>
                              <input type="text" id="min-Nutrient" class="range" placeholder="Min">
                              <input type="text" id="max-Nutrient" class="range" placeholder="Max">
                          </div>
                          <div>
                              <h3>Carbs (gr)</h3>
                              <input type="text" id="min-Carbs" class="range" placeholder="Min">
                              <input type="text" id="max-Carbs" class="range" placeholder="Max">
                          </div>
                          <div>
                              <h3>Protein (gr)</h3>
                              <input type="text" id="min-Protein" class="range" placeholder="Min">
                              <input type="text" id="max-Protein" class="range" placeholder="Max">
                          </div>
                          <div>
                              <h3>Fat (gr)</h3>
                              <input type="text" id="min-Fat" class="range" placeholder="Min">
                              <input type="text" id="max-Fat" class="range" placeholder="Max">
                          </div>
                          <div>
                              <h3>Cholesterol (gr)</h3>
                              <input type="text" id="min-cholesterol" class="range" placeholder="Min">
                              <input type="text" id="max-cholesterol" class="range" placeholder="Max">
                          </div>
                      </div>
                      <div class="diet-filter">
                          <h2>Diet</h2>
                          <div class="vegetarian-filter">
                              <input type="checkbox" name="diet" value="vegetarian" id="chk-vegetarian">
                              <label for="chk-vegetarian">Vegetarian</label>
                          </div>
                          <div class="vegan-filter">
                              <input type="checkbox" name="diet" value="vegan" id="chk-vegan">
                              <label for="chk-vegan">Vegan</label>
                          </div>
                          <div class="pascetarian-filter">
                              <input type="checkbox" name="diet" value="pascetarian" id="chk-pascetarian">
                              <label for="chk-pascetarian">Pascetarian</label>
                          </div>
                          <div class="gluten-filter">
                              <input type="checkbox" name="diet" value="gluten" id="chk-gluten">
                              <label for="chk-gluten">Gluten Free</label>
                          </div>
                          <div class="ketogenic-filter">
                              <input type="checkbox" name="diet" value="ketogenic" id="chk-ketogenic">
                              <label for="chk-ketogenic">Ketogenic</label>
                          </div>
                          <div class="paleo-filter">
                              <input type="checkbox" name="diet" value="paleo" id="chk-paleo">
                              <label for="chk-paleo">Paleo</label>
                          </div>
                          <div class="primal-filter">
                              <input type="checkbox" name="diet" value="primal" id="chk-primal">
                              <label for="chk-primal">Primal</label>
                          </div>
                          <div class="low-fodmap-filter">
                              <input type="checkbox" name="diet" value="low-fodmap" id="chk-low-fodmap">
                              <label for="chk-low-fodmap">Low Fodmap</label>
                          </div>
                          <div class="whole-filter">
                              <input type="checkbox" name="diet" value="whole" id="chk-whole">
                              <label for="chk-whole">Whole 30</label>
                          </div>
                      </div>
                      <div class="allergies-filter">
                          <h2>Allergies</h2>
                          <div class="peanut-filter">
                              <input type="checkbox" name="allergie" value="peanut" id="chk-peanut">
                              <label for="chk-peanut">Peanut</label>
                          </div>
                          <div class="seafood-filter">
                              <input type="checkbox" name="allergie" value="seafood" id="chk-peanut">
                              <label for="chk-seafood">Seafood</label>
                          </div>
                          <div class="dairy-filter">
                              <input type="checkbox" name="allergie" value="dairy" id="chk-dairy">
                              <label for="chk-dairy">Dairy</label>
                          </div>
                          <div class="egg-filter">
                              <input type="checkbox" name="allergie" value="egg" id="chk-egg">
                              <label for="chk-egg">Egg</label>
                          </div>
                          <div class="gluten-filter">
                              <input type="checkbox" name="allergie" value="gluten" id="chk-gluten">
                              <label for="chk-gluten">Gluten</label>
                          </div>
                          <div class="grain-filter">
                              <input type="checkbox" name="allergie" value="grain" id="chk-grain">
                              <label for="chk-grain">Grain</label>
                          </div>
                          <div class="sesame-filter">
                              <input type="checkbox" name="allergie" value="sesame" id="chk-sesame">
                              <label for="chk-sesame">Sesame</label>
                          </div>
                          <div class="shellfish-filter">
                              <input type="checkbox" name="allergie" value="shellfish" id="chk-shellfish">
                              <label for="chk-shellfish">Shellfish</label>
                          </div>
                          <div class="soy-filter">
                              <input type="checkbox" name="allergie" value="soy" id="chk-soy">
                              <label for="chk-soy">Soy</label>
                          </div>
                          <div class="sulfite-filter">
                              <input type="checkbox" name="allergie" value="sulfite" id="chk-sulfite">
                              <label for="chk-sulfite">Sulfite</label>
                          </div>
                          <div class="tree-nut-filter">
                              <input type="checkbox" name="allergie" value="tree-nut" id="chk-tree-nut">
                              <label for="chk-tree-nut">Tree Nut</label>
                          </div>
                          <div class="wheat-filter">
                              <input type="checkbox" name="allergie" value="wheat-nut" id="chk-wheat">
                              <label for="chk-wheat">Wheat</label>
                          </div>
                      </div>
                  </div>
                  <p id="emptyMessage" class="empty-message">* Empty filter</p>
                  <button id="filterButton" class="button-filter" type="submit">Search by Filter</button>
              </div>
              `;
    this.shadowDOM.querySelector('#filterButton').addEventListener('click', this._clickEvent);
  }
}

customElements.define('filter-menu', FilterMenu);
