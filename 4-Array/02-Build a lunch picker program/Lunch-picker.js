let lunches = [];

function addLunchToEnd (arr, str) {
  let newArray = arr.push(str);
  console.log( `${str} added to the end of the lunch menu.`);
  return arr;
}
console.log(addLunchToEnd(lunches,"Tacos"));

function addLunchToStart (arr, str) {
  let newArray = arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}
console.log(addLunchToStart(lunches, "Sushi"));

function removeLastLunch(arr) {
    if (arr.length > 0) {
        let lastItem = arr.pop();
        console.log(`${lastItem} removed from the end of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }
    return arr;
}
console.log(removeLastLunch(["Stew", "Soup", "Toast"]));

function removeFirstLunch(arr) {
    if (arr.length > 0) {
        let firstItem = arr.shift();
        console.log(`${firstItem} removed from the start of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }
    return arr;
}
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomLunch = array[randomIndex];

    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array.join(", ")}`);
  }
}