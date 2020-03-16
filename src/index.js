import { createStore } from "redux";

const add = document.getElementById("add");
const number = document.querySelector("span");
const minus = document.getElementById("minus");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// reducer : 스테이트가 존재하지 않는다면 0으로 스테이트를 초기화함
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;

    case MINUS:
      return count - 1;

    default:
      return count;
  }
};

// store
const countStore = createStore(countModifier);

// subscribe
const onChange = () => {
  number.innerText = countStore.getState();
};

// 스테이트가 스토어에서 바뀔때마다 onChange 함수 호출됨
countStore.subscribe(onChange);

// action creator
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
