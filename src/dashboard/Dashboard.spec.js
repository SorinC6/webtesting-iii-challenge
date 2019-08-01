// Test away
import React from "react";
import * as rt from "react-testing-library";

import Display from "../display/Display";
import Control from "../controls/Controls";
import Dashboard from "./Dashboard";

describe("Testing Dashboard component", () => {
  it("Render Dashboard Succesfully", () => {
    rt.render(<Dashboard />);
  });

  it("Render Display component Succesfully", () => {
    rt.render(<Display />);
  });

  it("Render Controls component Succesfully", () => {
    rt.render(<Control />);
  });
});
