import React from "react";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { load } from "./redux/actions";

function WithReduxPage() {
  // const [name, setNames] = useState([]);

  const store = createStore(rootReducer);

  return (
    <div className="main">
      <h1>GitHub users (With Redux technologie)</h1>
      <button onClick={store.dispatch(load())} type="button">
        Click on me!
      </button>
      <div className="result">{store}</div>
    </div>
  );
}

export default WithReduxPage;
