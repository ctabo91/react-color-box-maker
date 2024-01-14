import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

const addBox = (boxList, height = "2", width = "2", color = "green") => {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Background Color");

    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });

    const button = boxList.getByText("Add Box!");
    fireEvent.click(button);
}

it("renders without crashing", () => {
    render(<BoxList />);
});
  
it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", () => {
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    addBox(boxList);

    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        width: 2em;
        height: 2em;
        background-color: green;
    `);

    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("can remove a box", () => {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByText("X");

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});