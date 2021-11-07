import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  describe("Nav component", () => {
    // baseline test
    test("renders", () => {
      render(<Nav />);
    });

    // snapshot test
    test("matches snapshot", () => {
      const { asFragment } = render(<Nav />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
