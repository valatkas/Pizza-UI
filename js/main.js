import { handleDisplay, handleImageSelect } from "./modules/handlers.js";
import { addPizza } from "./modules/adders.js";
import { getSessionStorage } from "./modules/sessionStorage.js";
import { handleSort } from "./modules/sort.js";

export var values = {
  displayBox: null,
  nameBox: null,
  priceBox: null,
  heatBox: null,
  toppingBox: ["cheese", "paprika", "anchovy", "salami", "mushroom", "tomato"],
  selectedToppings: [],
  image: null,
  sortOrder: [true, false, false],
  init: function () {
    // GET ELEMENTS
    values.displayBox = document.getElementById("pizza-display");
    values.nameBox = document.getElementById("pizza-name");
    values.priceBox = document.getElementById("pizza-price");
    values.heatBox = document.getElementById("heat-select");

    // ASSIGN EVENT LISTENERS
    document.getElementById("add-pizza").addEventListener("click", addPizza);
    values.toppingBox.forEach((topping) => {
      document
        .getElementById(topping)
        .addEventListener("click", handleImageSelect.handleToppings);
    });

    document.getElementById("sort-by").addEventListener("change", handleSort);

    // ADD EVENT LISTENERS TO IMAGES
    for (let i = 1; i < 7; i++) {
      document
        .getElementById(i)
        .addEventListener("click", handleImageSelect.handlePizzaImage);
    }

    // UPDATE DISPLAY AND CALL SESSION STORAGE
    getSessionStorage();
    handleDisplay();
  },
};

// Initialize main function as soon as window is fully loaded
window.addEventListener("load", values.init);
