function Apples(props) {
    return (
        <div>
        <div className="promo-section">
            <h2>These apples are: {props.color} </h2>
        </div>
        <h3>There are {props.number} apples.</h3>
        </div>
    )
}

export default Apples;