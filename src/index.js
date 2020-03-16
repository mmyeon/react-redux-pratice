import { createStore } from "redux";

const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// reducer : 스테이트가 존재하지 않는다면 0으로 스테이트를 초기화함
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === ADD) {
    return count + 1;
  } else if (action.type === MINUS) {
    return count - 1;
  } else {
    return count;
  }
};

// store
const countStore = createStore(countModifier);

countStore.dispatch({ type: ADD });
countStore.dispatch({ type: ADD });
countStore.dispatch({ type: ADD });
countStore.dispatch({ type: ADD });
countStore.dispatch({ type: ADD });
countStore.dispatch({ type: ADD });
countStore.dispatch({ type: MINUS });

console.log(countStore.getState());
