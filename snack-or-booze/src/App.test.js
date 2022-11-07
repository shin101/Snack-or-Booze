import { render, fireEvent, queryByText } from "@testing-library/react";
import React from "react";
import App from './App';

// smoke test
it("renders without crashing", function(){
  render(<App />);
});

// snapshot test
it("matches snapshot", function (){
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})

it("shows homepage correctly", function (){
  const { getByText } = render(<App />);

})