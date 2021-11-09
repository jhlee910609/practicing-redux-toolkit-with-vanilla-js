/**
 * Redux
 * single flow of data is a main benefit of Redux!
 */

/**
 * reducer is a function which get specific data back.
 * @param {*} state: global object with data.
 * @param {string} action: action.
 */
const reducer = (state = [], action) => {
  // logic about state.
  // state is current state.
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];

    case "CLEAR":
      return [];
  }
  return state;
};

/**
 * store
 * store is instance of Redux.
 */
const store = Redux.createStore(reducer);

const list = document.querySelector(".list");
const btnAddUser = document.querySelector(".addUser");
const userInput = document.querySelector(".userInput");
const btnClear = document.querySelector(".clear");

btnAddUser.addEventListener("click", () => {
  store.dispatch({ type: "ADD_USER", payload: userInput.value });
});

btnClear.addEventListener("click", () => {
  store.dispatch({ type: "CLEAR" });
});

/**
 * module 1
 * store.getState(): return current state.
 */
store.subscribe(() => {
  userInput.value = "";
  const frag = document.createDocumentFragment();
  store.getState().forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user;
    frag.appendChild(li);
  });
  list.replaceChildren(frag);
});

/**
 * module 2
 * The object inside dispatch is an action.
 * @param {string} type: type is a manadatory and is always string.
 * @param {*} payload: payload is a property to store data in action.
 */
