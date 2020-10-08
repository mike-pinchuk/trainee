import React from "react";
import { createStore } from "redux";
import rootReducer from "./store/rootReducer";
import load from "./store/actions";
import store from './store/store'
import {getResult} from './store/mapDispatchToProps'

function WithReduxPage() {
  // const [name, setNames] = useState([]);

  // const store = createStore(rootReducer);

  return (
    <div className="main">
      <h1>GitHub users (With Redux technologie)</h1>
      <button onClick={getResult} type="button">
        Click on me!
      </button>
  <div className="result"></div>
    </div>
  );
}

export default WithReduxPage;
