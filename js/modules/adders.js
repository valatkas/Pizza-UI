import { values } from "../main.js";
import { clearForm, handleDisplay } from "./handlers.js";
import { addToSessionStorage, getSessionStorage } from "./sessionStorage.js";
import { pizzaArr } from "./sessionStorage.js";

export function addPizza(e) {
  e.preventDefault();

  // GET INPUT BOX VALUES
  const name = values.nameBox.value;
  const price = values.priceBox.value;
  const heat = parseFloat(values.heatBox.value);
  const toppings = values.selectedToppings;
  const img = values.image;

  var nameExists = false;

  // CHECKS IF NAME ALREADY EXISTS
  if (sessionStorage.getItem("pizzaArray") === null) {
  } else {
    var nameExists = pizzaArr.find(function (item) {
      return item.name === name;
    });
  }

  // CREATE PIZZA OBJECT
  if (name === "" || price === "" || toppings === "" || img === null) {
    alert("Input fields cannot be empty!");
  } else {
    if (name.length > 30) {
      alert(
        "Pizza name is limited to 30 characters and must be a string of characters!"
      );
    } else if (toppings.length < 2) {
      alert("You must choose at least 2 toppings for a pizza!");
    } else if (nameExists) {
      alert("Pizza name must be unique!");
    } else {
      const object = {
        name: name,
        price: Math.round(price * 100) / 100,
        heat: heat,
        toppings: toppings,
        img: img,
      };
      addToSessionStorage(object);
      clearForm();
      getSessionStorage();
      handleDisplay();
    }
  }
}
