import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { compose, createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
