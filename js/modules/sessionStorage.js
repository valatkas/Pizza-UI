import { handleDisplay } from "./handlers.js";

export let pizzaArr = [];

export function addToSessionStorage(pizza) {
  // CHECK IF PIZZA EXISTS IN SESSION STORAGE
  let pizzaArray;

  if (sessionStorage.getItem("pizzaArray") === null) {
    pizzaArray = [];
  } else {
    pizzaArray = JSON.parse(sessionStorage.getItem("pizzaArray"));
  }
  pizzaArray.push(pizza);
  sessionStorage.setItem("pizzaArray", JSON.stringify(pizzaArray));

  handleDisplay();
}

export function getSessionStorage() {
  // GET SESSION STORAGE AND UPDATE DISPLAY
  let pizzaArray = "pizzaArray";

  if (sessionStorage.getItem(pizzaArray) === null) {
    pizzaArray = [];
  } else {
    pizzaArray = JSON.parse(sessionStorage.getItem(pizzaArray));
  }
  pizzaArr = pizzaArray;
  handleDisplay();
}
