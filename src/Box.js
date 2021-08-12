function Box({id, width, height, backgroundColor, removeBox}) {
    width = `${width}px`;
    height = `${height}px`;

    return (
    <div className="Box">
      <div 
          className="Box-component" style={{ width, height, backgroundColor }}>
      </div>
      <div className="Box-removeBox">
        <button onClick={() => removeBox(id)}>Remove the Box</button>
      </div>
    </div>
    );
}

export default Box;