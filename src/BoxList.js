import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';


/** BoxList: manages list of boxes
 *
 * State:
 * - boxes: array like [ { id, width, height, backgroundColor }, ... ]
 *
 * BoxList --> NewBoxForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  console.log(boxes);

  /** Add new Box to boxes list. */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }
  // end
  
  /** Remove box from boxes list */
  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }
  
  function renderBoxes() {
    return (
        <ul>
          {boxes.map(box => (
                <Box id = {box.id} 
                key = {box.id} 
                width={box.width} 
                height={box.height} 
                backgroundColor={box.backgroundColor} 
                removeBox = {removeBox}
                />
          ))}
        </ul>
    );
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
