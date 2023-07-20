// Write your Pizza Builder JavaScript in this file.


// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((monoMushroom) => {
    if (state.mushrooms) {
      monoMushroom.style.visibility = 'visible';
    } else {
      monoMushroom.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((particularPepper) => {
    if (state.greenPeppers) {
      particularPepper.style.visibility = 'visible';
    } else {
      particularPepper.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  let buttons = document.querySelectorAll('.btn'); 
  buttons.forEach((placeholder) => { 
    const ingredientValue = placeholder.dataset.ingredient //we use this to look up the ingredient that is defined in HTML as the button as data-ingredient
    // console.log(ingredientValue);
    if (state[ingredientValue]) { //this is used to check if the value from data-ingredient is truthy/falsy compared to the status of the objects in "state"
      placeholder.classList.add('active');
    } else {
      placeholder.classList.remove('active');
    }
  });
}

// Iteration 4: change the HTML of `<aside class="panel price">`

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};


function renderPrice() {
  let buttons = document.querySelectorAll('.btn'); 
  buttons.forEach((placeholder) => { 
    const ingredientValue = placeholder.dataset.ingredient
    let panelPrice = document.getElementsByClassName("panel price")
    // let ingredientPrice = panelPrice.
    // console.log(ingredientValue);
    if (state[ingredientValue]) {
      placeholder.style.visibility = 'visible';
    } else {
      placeholder.style.visibility = 'hidden';
    }
  });

}

let test = document.getElementsByClassName("panel price")
console.log(test)

// <!-- Price -->
// <aside class="panel price">
//   <h2>Your pizza's price</h2>

//   <b>$10 cheese pizza</b>
//   <ul>
//     <li>$1 pepperoni</li>
//     <li>$1 mushrooms</li>
//     <li>$1 green peppers</li>
//     <li>$3 white sauce</li>
//     <li>$5 gluten-free crust</li>
//   </ul>
//   <strong>$21</strong>
// </aside>
// <!-- End Price -->

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
