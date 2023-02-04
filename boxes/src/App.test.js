import { render } from "@testing-library/react";
import App from "./App";

describe("Tests the App component", function () {

  it("renders without crashing", function () {
    render(<App />);
  });

  it("matches the snapshot", function () {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
