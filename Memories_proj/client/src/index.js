import React from "react";
//import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";

import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));

createRoot(document.getElementById("root")).render(<App />);
