import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = boxObj => {
        setBoxes(boxes => [...boxes, boxObj]);
    };
    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComponents = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleRemove={removeBox}
            backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <div className="BoxList">
            <NewBoxForm createBox={addBox} />
            {boxComponents}
        </div>
    );
}


export default BoxList;