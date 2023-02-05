import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

describe("NewBoxForm component", ()=>{
    it("renders ", () => {
        render(
            <NewBoxForm
            createBox = {()=>{}}
            />
        )
    });
    it("matches the snapshot", function () {
        const { container } = render(
          <NewBoxForm createBox = {()=>{}}/>
        );
        expect(container).toMatchSnapshot();
    });
    it("checks for labels", () => {
        const { container } = render(<NewBoxForm createBox={() => {}} />);
        const labels = ["Height", "Width", "Background Color", "Add a new box!"];

        labels.forEach((label) => {
          expect(container.textContent).toContain(label);
        });
      });

    test('calls createBox with form data when form is submitted', () => {
        const createBox = jest.fn();
        const { getByLabelText, getByText } = render(<NewBoxForm createBox={createBox} />);

        const heightInput = getByLabelText('Height');
        const widthInput = getByLabelText('Width');
        const backgroundColorInput = getByLabelText('Background Color');
        const addBtn = getByText('Add a new box!');

        fireEvent.change(heightInput, { target: { value: '100' } });
        fireEvent.change(widthInput, { target: { value: '200' } });
        fireEvent.change(backgroundColorInput, { target: { value: 'red' } });
        fireEvent.click(addBtn);


        expect(createBox).toHaveBeenCalled();
        expect(createBox).toHaveBeenCalledWith({ height: '100', width: '200', backgroundColor: 'red', id: expect.any(String) });
      });
});
