import { render } from "@testing-library/react";
import Box from "./Box";

describe("Box component", () => {
  it("renders without crashing", function () {
    render(
      <Box
        id={"1"}
        width={10}
        height={10}
        backgroundColor={"red"}
        remove={() => {}}
      />
    );
  });

  it("matches the snapshot", function () {
    const { container } = render(
      <Box
        id={"1"}
        width={10}
        height={10}
        backgroundColor={"red"}
        remove={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with correct styles", function () {
    const { getByTestId } = render(
      <Box
        id={"1"}
        width={10}
        height={10}
        backgroundColor={"red"}
        remove={() => {}}
      />
    );

    const box = getByTestId("box-1");

    expect(box).toHaveStyle(`width: 10em`);
    expect(box).toHaveStyle(`height: 10em`);
    expect(box).toHaveStyle(`background-color: red`);
  });
});
