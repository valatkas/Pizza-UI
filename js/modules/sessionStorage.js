import { handleDisplay } from "./handlers.js";

export let pizzaArr = [];

export function addToSessionStorage(pizza) {
  // ADD TO SESSION STORAGE

  let pizzaArray;

  if (sessionStorage.getItem("pizzaArray") === null) {
    // CHECK IF PIZZA EXISTS IN SESSION STORAGE
    pizzaArray = [];
  } else {
    pizzaArray = JSON.parse(sessionStorage.getItem("pizzaArray"));
  }
  pizzaArray.push(pizza); // ADD PIZZA OBJECT TO SESSION STORAGE ARRAY
  sessionStorage.setItem("pizzaArray", JSON.stringify(pizzaArray));

  getSessionStorage(); // GET UPDATED SESSION STORAGE
}

export function getSessionStorage() {
  // GET SESSION STORAGE

  let pizzaArray = "pizzaArray";

  if (sessionStorage.getItem(pizzaArray) === null) {
    pizzaArray = [];
  } else {
    pizzaArray = JSON.parse(sessionStorage.getItem(pizzaArray));
  }
  pizzaArr = pizzaArray; // COPY SESSION STORAGE ARRAY TO LOCAL ARRAY
  handleDisplay(); // UPDATE DISPLAY
}
