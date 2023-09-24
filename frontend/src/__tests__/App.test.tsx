/* eslint-disable linebreak-style */
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    render(<App />);
  });

  it("should render hello world", () => {
    expect(true).toBeTruthy();
  });

  it("Should render the page correctly", async () => {
    const h1 = await screen.queryByText("hello world");

    // Post Expectations
    expect(h1).not.toBeNull();
  });
});
