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

  it("shoud display Loked if loked prop is true", () => {
    const wrap = rt.render(<Display loked={true} />);
    const loked = wrap.getByText(/locked/i);
    expect(loked).toBeDefined();
  });

  it("shoud display Open if loked prop is false", () => {
    const wrap = rt.render(<Display loked={false} />);
    const loked = wrap.getByText(/Unlocked/i);
    expect(loked).toBeDefined();
  });
});
