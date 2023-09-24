/* eslint-disable linebreak-style */
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import userEvent  from '@testing-library/user-event';


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
    const user = userEvent.setup();
    const h1 = await screen.queryByText("hello world");
    await user.click(h1)

    // Post Expectations
    expect(h1).not.toBeNull();
  });
});
