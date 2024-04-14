import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";


it("renders without crashing", function() {
    render(<TodoList />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it("can add a todo", function() {
    const list = render(<TodoList />);
    addTodo(list);
  

    expect(list.getByLabelText("Task:")).toHaveValue("");
    expect(list.getByText("write tests")).toBeInTheDocument();
    expect(list.getByText("Edit")).toBeInTheDocument();
    expect(list.getByText("X")).toBeInTheDocument();
  });