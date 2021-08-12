import React, { useState } from "react";

/** Form for creating a new Box to add to a list.
 *
 * Has state for the width/height/backgroundColor of the Box; on submission,
 * sends {width, height, backgroundColor} to fn rec'd from parent.
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const initialState = { width: 0, height: 0, backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  /** Send {width, height, backgroundColor} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
      <form onSubmit={handleSubmit}>

        <label htmlFor="width">Width:</label>
        <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
        />

        <label htmlFor="height">Height:</label>
        <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
        />

        <label htmlFor="backgroundColor">Background Color:</label>
        <input
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
        />

      <button>Add a new Box!</button>
    </form>
  );
}

export default NewBoxForm;
