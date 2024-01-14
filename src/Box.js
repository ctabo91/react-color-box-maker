import React from "react";

const Box = ({
    id,
    handleRemove,
    width = 5,
    height = 5,
    backgroundColor = "green"
}) => {
    const removeBox = () => handleRemove(id);

    return (
        <div>
            <div
                style={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor
                }}
            />
            <button onClick={removeBox}>X</button>
        </div>
    );
}


export default Box;