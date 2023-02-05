import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"

describe('BoxList component', () => {
  it('renders a box', () => {
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
  it('renders a NewBoxForm', () => {
    render(
      <NewBoxForm createBox = {function(){}} />
    );
  });
  it("matches the snapshot", function () {
      const { container } = render(
        <BoxList/>
      );
      expect(container).toMatchSnapshot();
  });
});
