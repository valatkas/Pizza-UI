import { values } from "../main.js";
import { pizzaArr } from "./sessionStorage.js";

let pizzaArray;

export function handleDisplay() {
  // UPDATES WINDOW DISPLAY

  values.displayBox.innerHTML = ``; // CLEAR PIZZA DISPLAY BOX.

  pizzaArr.forEach((pizza) => {
    // ITERATE TROUGH PIZZA ARRAY AND GET OBJECTS

    let heat = "";

    for (let i = 0; i < pizza.heat; i++) {
      // DISPLAY CHILI ICONS ACCORDING TO SPICINESS
      heat += `<img id="heat" class="heat" src="./img/chili.svg">`;
    }

    var pizzaDisplay = document.createElement("div");
    // CREATE PIZZA OBJECT DIV
    pizzaDisplay.setAttribute("id", pizza.name);
    pizzaDisplay.setAttribute("class", "pizza-element");
    pizzaDisplay.innerHTML = `
      <img src="${pizza.img}" class="pizza-image">
      <div id="name" class="pizza-name">${pizza.name.toUpperCase()}${heat}</div>
      <div id="price" class="pizza-price">${pizza.price}€</div>
      <div class="pizza-toppings">${pizza.toppings.join(", ")}</div>
      <input id="delete-button" type="button" value="REMOVE" class="delete-button">`;

    values.displayBox.appendChild(pizzaDisplay); // ADD THE NEW DIV TO THE PIZZA DISPLAY

    // ASSIGN EVENT LISTENER TO DELETE BUTTONS

    document.querySelectorAll(".delete-button").forEach((item) => {
      item.addEventListener("click", handleDelete);
    });
  });
}

export var handleImageSelect = {
  handleToppings: function () {
    // HANDLE TOPPING SELECTION
    let topping = document.getElementById(this.id);

    if (topping.classList.contains("toppingselected")) {
      topping.classList.remove("toppingselected");

      values.selectedToppings.splice(
        values.selectedToppings.indexOf(this.id),
        1
      );
    } else {
      // PUSH TOPPING TO TEMPORARY ARRAY FOR STORAGE
      topping.classList.add("toppingselected");
      values.selectedToppings.push(this.id);
    }
  },

  handlePizzaImage: function () {
    // HANDLE PIZZA IMAGE SELECTION
    let image = document.getElementById(this.id);

    if (image.classList.contains("imageselected")) {
      image.classList.remove("imageselected");
      values.image = null;
    } else {
      values.image = `img/pizza${this.id}.png`;
      image.classList.add("imageselected");
    }
  },
};

export function handleDelete(e) {
  // HANDLE PIZZA DELETION
  const pizzaRow = e.target.parentElement;
  const pizzaIndex = pizzaRow.id;

  var confirmDelete = confirm("Are you sure you want to delete this pizza?");
  if (confirmDelete === true) {
    // CONFIRMATION UPON PIZZA REMOVAl
    if (sessionStorage.getItem("pizzaArray") === null) {
      pizzaArray = [];
    } else {
      pizzaArray = JSON.parse(sessionStorage.getItem("pizzaArray"));
    }
    pizzaArray.splice(pizzaArray.indexOf(pizzaIndex), 1); // REMOVES PIZZA FROM SESSION STORAGE ARRAY
    pizzaArr.splice(pizzaArr.indexOf(pizzaIndex), 1); // REMOVES PIZZA FROM LOCAL ARRAY
    sessionStorage.setItem("pizzaArray", JSON.stringify(pizzaArray));

    pizzaRow.className = "deleted"; // RUN DELETE ANIMATION
    setTimeout(function () {
      pizzaRow.remove();
    }, 100);
  } else {
  }
}

export function clearForm() {
  // CLEAR FORM AFTER SUBMITTION
  values.nameBox.value = "";
  values.priceBox.value = "0.00";
  values.heatBox.selectedIndex = 0;
  values.selectedToppings = [];
  values.image = null;

  // CLEARS TOPPING SELECTION
  values.toppingBox.forEach((topping) => {
    document.getElementById(topping).classList.remove("toppingselected");
  });

  // CLEARS PIZZA IMAGE SELECTION
  for (let i = 1; i < 7; i++) {
    document.getElementById(i).classList.remove("imageselected");
  }
}
