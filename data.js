module.exports = function () {
  return {
    products: [
      {
        id: 1,
        name: "Kayak",
        category: "Watersports",
        description: "A boat for one person",
        price: 275,
      },
      {
        id: 2,
        name: "Lifejacket",
        category: "Watersports",
        description: "Protective and fashionable",
        price: 48.95,
      },
      {
        id: 3,
        name: "Soccer Ball",
        category: "Soccer",
        description: "FIFA-approved size and weight",
        price: 19.5,
      },
      {
        id: 4,
        name: "Corner Flags",
        category: "Soccer",
        description: "Give your playing field a professional touch",
        price: 34.95,
      },
      {
        id: 5,
        name: "Stadium",
        category: "Soccer",
        description: "Flat-packed 35,000-seat stadium",
        price: 79500,
      },
      {
        id: 6,
        name: "Thinking Cap",
        category: "Chess",
        description: "Improve brain efficiency by 75%",
        price: 16,
      },
      {
        id: 7,
        name: "Unsteady Chair",
        category: "Chess",
        description: "Secretly give your opponent a disadvantage",
        price: 29.95,
      },
      {
        id: 8,
        name: "Human Chess Board",
        category: "Chess",
        description: "A fun game for the family",
        price: 75,
      },
      {
        id: 9,
        name: "Bling Bling King",
        category: "Chess",
        description: "Gold-plated, diamond-studded King",
        price: 1200,
      },
    ],
    orders: [],
  };
};
const { fromEvent, from } = rxjs;
const {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  filter,
} = rxjs.operators;

let searchBox = document.getElementById("search");
let results = document.getElementById("results");

let searchGithub = (query) =>
  fetch(`https://api.github.com/search/users?q=${query}`).then((data) =>
    data.json()
  );

let input$ = fromEvent(searchBox, "input").pipe(
  debounceTime(250),
  map((e) => e.target.value),
  filter((query) => query.length >= 2 || query.length === 0),
  distinctUntilChanged(),
  switchMap((value) =>
    value ? from(searchGithub(value)) : from(Promise.resolve({ items: [] }))
  )
);

input$.subscribe((data) => {
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
  data.items.map((user) => {
    let newResult = document.createElement("li");
    newResult.textContent = user.login;
    results.appendChild(newResult);
  });
});
