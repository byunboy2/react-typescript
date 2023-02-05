import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

interface BoxesInterface {
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
}


/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 *
 *  App --> BoxList --> {NewBoxForm, Box (many)}
 */
const BoxList: React.FC = () => {
  const [boxes, setBoxes] = useState<BoxesInterface[]>([]);
  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: BoxesInterface ) {
    setBoxes((boxes: BoxesInterface[]) => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string) {
    setBoxes((boxes: BoxesInterface[]) => boxes.filter((box) => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
