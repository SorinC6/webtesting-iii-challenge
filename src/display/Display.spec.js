// Test away!
import React from "react";
import Display from "./Display";
import "jest-dom/extend-expect";
import * as rt from "react-testing-library";

describe("The Display Component", () => {
  it("render without crasing", () => {
    rt.render(<Display />);
  });

  it("when prop closed is false  - display: Open", () => {
    const wrap = rt.render(<Display closed={false} />);
    const closed = wrap.getByTestId("closedDisplay");
    expect(closed).toHaveTextContent(/open/i);
  });

  it("when prop closed is true  - display: Closed", () => {
    const wrap = rt.render(<Display closed={false} />);
    const open = wrap.getByText(/open/i);
    expect(open).toBeDefined();
  });
});
