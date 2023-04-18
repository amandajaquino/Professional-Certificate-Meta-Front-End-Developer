const Nav = props => {
    return (
        <nav className="main-nav">
        <ul>
            <li>{props.first}</li>
        </ul>
    </nav>
    );
}

export default Nav;