import { render } from "@testing-library/react";
import Box from "./Box"

it("renders without crashing", function () {
  render(<Box />);
});

it("matches the snapshot", function () {
  const { container } = render(<Box />);
  expect(container).toMatchSnapshot();
});

