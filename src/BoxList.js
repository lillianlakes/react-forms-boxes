import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';


/** BoxList: manages list of boxes
 *
 * State:
 * - boxes: array like [ { id, width, height, backgroundColor }, ... ]
 *
 * BoxList --> 
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  console.log(boxes);

  function renderBoxes() {
    return (
        <ul>
          {boxes.map(box => (
            //   <li key={box.id}>
                <Box width={box.width} height={box.height} backgroundColor={box.backgroundColor}/>
            //   </li>
          ))}
        </ul>
    );
  }
  // end

  /** Add new Box object to cart. */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }
  // end

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}
// end

export default BoxList;
