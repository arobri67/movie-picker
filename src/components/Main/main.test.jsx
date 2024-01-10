/**
 * @vitest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { UserEvent } from "@testing-library/user-event";
import Main from "./Main";
import userEvent from "@testing-library/user-event";

describe("Main", () => {
  //********TEST 1********//
  test("TEST 1: should render the two articles", () => {
    render(<Main />);
    const article = screen.getAllByRole("article");
    expect(article).toHaveLength(2);
    article.forEach((i) => expect(i).toBeInTheDocument());
  });
  //********TEST 2********//
  test("TEST 2: should render h1 with a specific title", () => {
    render(<Main />);
    expect(
      screen.getByRole("heading", {
        name: "Discover Trending Films Instantly.",
      })
    ).toBeInTheDocument();
  });
  //********TEST 3********//
  test("TEST 3: should render text", () => {
    render(<Main />);
    expect(
      screen.getByText(
        "movie night, reimagined: say goodbye to decision fatigue and hello to effortless discoveries",
        { exact: false }
      )
    ).toBeInTheDocument();
  });
  //********TEST 4********//
  test("TEST 4: should render button with a text", () => {
    render(<Main />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("See What's Trending");
    expect(
      screen.getByRole("button", { name: "See What's Trending" })
    ).toBeVisible();
  });
  //********TEST 5********//
  test("TEST 5: should render an img with alt attribute", () => {
    render(<Main />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "hero image");
    expect(screen.getByRole("img")).toHaveAttribute("src");
    expect(screen.getByRole("img", { name: "hero image" })).toBeInTheDocument();
  });
  //********TEST 6********//
  test("TEST 6: should render an h2 element when clicked on button", async () => {
    const user = userEvent.setup();
    render(<Main />);
    const button = screen.getByRole("button", {
      name: "See What's Trending",
    });
    user.click(button);
    await waitFor(() =>
      expect(screen.getByText("Trending Movies")).toBeVisible()
    );
  });
  //********TEST 7********//
  test("TEST 7: should render cards when clicked on button", async () => {
    const user = userEvent.setup();
    render(<Main />);
    const button = screen.getByRole("button", {
      name: "See What's Trending",
    });
    user.click(button);
    await waitFor(() => {
      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(20);
      const img = screen.getAllByRole("img");
      img.forEach((i) => {
        expect(i).toHaveAttribute("alt");
        expect(i).toBeInTheDocument();
      });
      const link = screen.getAllByText("More");
      link.forEach((i) => {
        expect(i).toBeInTheDocument();
      });
      const title = screen.getAllByText("Overview");
      link.forEach((i) => {
        expect(i).toBeInTheDocument();
      });
    });
  });
});
