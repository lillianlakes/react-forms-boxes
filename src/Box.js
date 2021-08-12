function Box({width, height, backgroundColor}) {
    width = `${width}px`;
    height = `${height}px`;

    return (
    <div 
        className="Box"
        style={{ width, height, backgroundColor }}>
    </div>
    );
}

export default Box;