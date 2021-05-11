import { values } from "../main.js";
import { handleDisplay } from "./handlers.js";
import { pizzaArr } from "./sessionStorage.js";

export var doSort = {
  //SORT BY NAME
  sortByName: function (a, b) {
    if (values.sortOrder[0]) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    } else {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    }
  },

  // SORT BY PRICE
  sortByPrice: function (a, b) {
    if (values.sortOrder[1]) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    } else {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
    }
  },

  // SORT BY SPICINESS
  sortByHeat: function (a, b) {
    if (values.sortOrder[2]) {
      if (a.heat < b.heat) return -1;
      if (a.heat > b.heat) return 1;
      return 0;
    } else {
      if (a.heat < b.heat) return 1;
      if (a.heat > b.heat) return -1;
      return 0;
    }
  },
};

export function handleSort(e) {
  // LISTEN FOR SORT REQUESTS AND HANDLE THEM

  switch (e.target.value) {
    case "name":
      values.sortOrder[0] = !values.sortOrder[0];
      pizzaArr.sort(doSort.sortByName);
      break;

    case "price":
      values.sortOrder[1] = !values.sortOrder[1];
      pizzaArr.sort(doSort.sortByPrice);
      break;

    case "heat":
      values.sortOrder[2] = !values.sortOrder[2];
      pizzaArr.sort(doSort.sortByHeat);
      break;
  }
  console.log(values.sortOrder);
  handleDisplay();
}
