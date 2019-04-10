// Test away!
import React from "react";
import * as rt from "react-testing-library";
import Controls from "./Controls";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

describe("Testing Controls component", () => {
  it("render Conponents component succesfully", () => {
    rt.render(<Controls />);
  });

  it("it should render the buttons succesfully", () => {
    const wrap = rt.render(<Controls />);
    const lockBtn = wrap.getByText(/Lock Gate/i);
    const closeBtn = wrap.getByText(/Close Gate/i);
    expect(lockBtn).toBeDefined();
    expect(closeBtn).toBeDefined();
  });

  it("execute function toggleClosed when toggle is pressed", () => {
    const toggleClosed = jest.fn();
    const wrap = rt.render(
      <Controls toggleClosed={toggleClosed} closed={false} />
    );
    const button = wrap.getByText(/Close Gate/i);
    rt.fireEvent.click(button);
    expect(toggleClosed).toHaveBeenCalledTimes(1);
    rt.fireEvent.click(button);
    expect(toggleClosed).toHaveBeenCalledTimes(2);
  });

  it("execute passed function when locked gate is clicked", () => {
    const mockFn = jest.fn();
    const wrap = rt.render(<Controls toggleLocked={mockFn} locked={false} />);
    const button = wrap.getByText(/lock gate/i);
    rt.fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
