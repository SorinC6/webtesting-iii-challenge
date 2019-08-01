// Test away!
import React from "react";
import Display from "./Display";
import "jest-dom/extend-expect";
import * as rt from "react-testing-library";

afterEach(rt.cleanup);

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
    const wrap = rt.render(<Display locked={true} />);
    const loked = wrap.getByText(/locked/i);
    expect(loked).toBeDefined();
  });

  it("shoud display Open if loked prop is false", () => {
    const wrap = rt.render(<Display locked={false} />);
    const loked = wrap.getByText(/Unlocked/i);
    expect(loked).toBeDefined();
  });

  it("it shoud display red-led class when locked prop is true", () => {
    const wrap = rt.render(<Display locked={true} />);
    const lockedTrue = wrap.getByText(/locked/i);
    expect(lockedTrue).toHaveClass("led red-led");
  });

  it("it shoud display green-led class when locked prop is false", () => {
    const wrap = rt.render(<Display locked={false} />);
    const lockedFalse = wrap.getByText(/locked/i);
    expect(lockedFalse).toHaveClass("led green-led");
  });

  it("it should display red-led when closed prop in true", () => {
    const wrap = rt.render(<Display closed={true} />);
    const closedTrue = wrap.getByTestId("closedDisplay");
    expect(closedTrue).toHaveClass("led red-led");
  });

  it("it should display green-led when closed prop in false", () => {
    const wrap = rt.render(<Display closed={false} />);
    const closedTrue = wrap.getByTestId("closedDisplay");
    expect(closedTrue).toHaveClass("led green-led");
  });
});
