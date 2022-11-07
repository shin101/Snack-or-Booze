import { render, fireEvent, queryByText } from "@testing-library/react";
import React from "react";
import NewFoodForm from "./NewFoodForm";

// smoke test
it("renders without crashing", function(){
  render(<NewFoodForm />);
});

// snapshot test
it("matches snapshot", function (){
  const { asFragment } = render(<NewFoodForm />);
  expect(asFragment()).toMatchSnapshot();
})

it("submits new task correctly", function (){
  const mockAddTask = jest.fn();
  const { queryByText } = render(<NewFoodForm addFood={mockAddTask}/>);
  // eslint-disable-next-line
  const btn = queryByText("Add food");
  fireEvent.click(btn);
  expect(mockAddTask).toHaveBeenCalled();
})