/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  //********TEST 1********//
  test("TEST 1: should render correct element", () => {
    render(<Footer />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    listItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
  //********TEST 2********//
  test("TEST 2: should render li inside a ul", () => {
    render(<Footer />);
    const ul = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((item) => {
      expect(ul).toContain(item);
    });
  });
});
