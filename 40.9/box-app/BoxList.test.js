import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function() {
    render(<BoxList />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it("can add a new box", function() {
    const boxList = render(<BoxList />);
  
    // no boxes yet
    expect(boxList.queryByText("Remove The Box!")).not.toBeInTheDocument();
  
    addBox(boxList);
  
    // expect to see a box
    const removeButton = boxList.getByText("Remove The Box!");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
      width: 2em;
      height: 2em;
      background-color: peachpuff;
    `);
   
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
  
  
  });