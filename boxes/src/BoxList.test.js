import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

describe("Tests the BoxList component", function () {

  it("renders without crashing", function () {
    render(<BoxList />);
  });

  it("matches the snapshot", function () {
    const { container } = render(<BoxList />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot when one box is on the page", function () {
    const { container } = render(<BoxList />);

    const widthInput = container.querySelector("#newBox-width");
    const heightInput = container.querySelector("#newBox-height");
    const backgroundColor = container.querySelector("#newBox-backgroundColor");
    fireEvent.change(widthInput, { target: { value: 25 } });
    fireEvent.change(heightInput, { target: { value: 30 } });
    fireEvent.change(backgroundColor, { target: { value: "red" } });

    const submitBtn = container.querySelector("#NewBoxForm-addBtn");
    fireEvent.click(submitBtn);

    expect(container).toMatchSnapshot();
  });

  it("works when creating a new box", function () {
    const { container } = render(<BoxList />);

    expect(container.innerHTML).not.toContain(
      `<div class="Box-box" style="height: 30em; width: 25em; background-color: red;">`
    );

    const widthInput = container.querySelector("#newBox-width");
    const heightInput = container.querySelector("#newBox-height");
    const backgroundColor = container.querySelector("#newBox-backgroundColor");
    fireEvent.change(widthInput, { target: { value: 25 } });
    fireEvent.change(heightInput, { target: { value: 30 } });
    fireEvent.change(backgroundColor, { target: { value: "red" } });

    const submitBtn = container.querySelector("#NewBoxForm-addBtn");
    fireEvent.click(submitBtn);

    expect(container.innerHTML).toContain(
      `<div class="Box-box" style="height: 30em; width: 25em; background-color: red;">`
    );
  });

  it("works when deleting a box", function () {
    const { container } = render(<BoxList />);

    const widthInput = container.querySelector("#newBox-width");
    const heightInput = container.querySelector("#newBox-height");
    const backgroundColor = container.querySelector("#newBox-backgroundColor");
    fireEvent.change(widthInput, { target: { value: 25 } });
    fireEvent.change(heightInput, { target: { value: 30 } });
    fireEvent.change(backgroundColor, { target: { value: "red" } });

    const submitBtn = container.querySelector("#NewBoxForm-addBtn");
    fireEvent.click(submitBtn);

    expect(container.innerHTML).toContain(
      `<div class="Box-box" style="height: 30em; width: 25em; background-color: red;">`
    );

    const deleteBtn = container.querySelector("button.Box-removeBtn");
    fireEvent.click(deleteBtn);

    expect(container.innerHTML).not.toContain(
      `<div class="Box-box" style="height: 30em; width: 25em; background-color: red;">`
    );
  });
});
