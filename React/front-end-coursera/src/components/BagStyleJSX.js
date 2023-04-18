function Bag(props) {
    //There are three ways to style in react: i) with css; ii) inline; iii) in a variable
    const bag = {
        padding: "10px",
        border: "1px solid gray",
        backgroundColor: "red",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}

export default Bag;