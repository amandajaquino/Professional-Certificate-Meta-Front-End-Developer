import React from "react";

function Fruits(props) {
    const {fruits} = props;
    // or instead of destructuring: props.fruits.map ... etc

    return (
        <div>
            {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    );
};

export default Fruits;