/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Header from "./Header";

describe("Header", () => {
  //********TEST 1********//
  test("TEST 1: should render element (img and link)", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByRole("link")).toBeVisible();
  });
  //********TEST 2********//
  test("TEST 2: element should render with the correct atribute for img and link", () => {
    render(<Header />);
    //img and attribute
    expect(screen.getByRole("img")).toHaveAttribute("alt", "MoviePicker logo");
    //link and attributes
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/arobri67"
    );
    expect(screen.getByRole("link")).toHaveAttribute("rel", "noopener");
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });
  //********TEST 3********//
  test("TEST 3: should render text within a link", () => {
    render(<Header />);
    expect(screen.getByRole("link")).toHaveTextContent("View on Github");
    expect(screen.getByText("View on Github")).toBeVisible;
  });
});
