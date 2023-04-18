function Intro1(props) {
        return (
            <div className="blog-post-intro">
                <h2>{props.text1}</h2>
                <div>
                    <p>{props.text2}</p>
                    <p className="link">{props.text3}</p>
                </div>
            </div>
        );
    };
    
    export default Intro1;