import { render } from "@testing-library/react";
import Box from "./Box"

describe("Tests the Box component", function () {

  it("renders without crashing", function () {
    render(<Box />);
  });

  it("matches the snapshot", function () {
    const { container } = render(<Box />);
    expect(container).toMatchSnapshot();
  });
});
