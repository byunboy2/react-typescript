import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 *
 *  App --> BoxList --> {NewBoxForm, Box (many)}
 */

interface Boxes { //TODO: rename this Interface
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
}

function BoxList() {
  const [boxes, setBoxes] = useState<Boxes[]>([]);
  console.log("setBoxes", boxes);
  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: Boxes ) {
    setBoxes((boxes: Boxes[]) => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string) {
    setBoxes((boxes: Boxes[]) => boxes.filter((box) => box.id !== id));
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
