import { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SubmitButton from "./SubmitButton";
const initialCount = {
  countdown: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        countdown: Number(state.countdown) + Number(action.value),
      };
    case "Decrement":
      return {
        ...state,
        countdown: Number(state.countdown) - Number(action.value),
      };
    case "Reset":
      return initialCount;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialCount);
  const [numofCount, setnumofCount] = useState(1);
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="counter-block">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h2 className="title">Set Count </h2>
            </div>
            <div className="col-md-4 col-sm-4">
              <input
                type="text"
                className="form-control"
                value={numofCount}
                onChange={(e) => setnumofCount(e.target.value)}
              />
            </div>
          </div>

          <h2 className="mg">{count.countdown}</h2>
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <SubmitButton
                value="Increment"
                action={() =>
                  dispatch({ type: "Increment", value: numofCount })
                }
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <SubmitButton
                value="Decrement"
                action={() =>
                  dispatch({ type: "Decrement", value: numofCount })
                }
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <SubmitButton
                value="Reset"
                action={() => dispatch({ type: "Reset" })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
