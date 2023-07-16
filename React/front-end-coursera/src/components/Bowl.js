function Bowl(props) {
    return (
        <span>
            {props.bowlShape}-shaped bowl, and it is currently {props.bowlStatus}
        </span>
    );
    };

export default Bowl;