import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("works when submitted", function () {
  const { container } = render(<BoxList />);
  const submitBtn = container.querySelector(".Box-removeBtn")
  fireEvent.click(sub)
});