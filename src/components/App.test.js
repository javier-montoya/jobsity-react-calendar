import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "../store";

it("renders correctly", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper).toBeDefined();
});
