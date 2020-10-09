import React from "react";
import rootReducer from './store/rootReducer'
import store from './store/store'
import {increment, decrement} from './store/actions'
// import { useState } from "react";

function WithReduxPage() {
    // let state = 0;

store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

// store.dispatch(decrement())

//   const [result, setResult] = useState(0);

//   function plus() {
//     setResult(result + 1);
//   }

//   function minus() {
//     setResult(result - 1);
//   }

  return (
    <div>
      <h1>WORK!</h1>
      <button type="button" onClick={store.dispatch(decrement())}>
        Plus
      </button>
      <button type="button" >
        Minus
      </button>
      <br />
      <span>{store.getState()}</span>
    </div>
  );
}

export default WithReduxPage;
