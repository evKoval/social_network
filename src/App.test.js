import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";

test("renders learn react link", () => {
  const { getByText } = render(
    <BrowserRouter>
       <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
