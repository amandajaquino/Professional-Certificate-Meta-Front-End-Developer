import "./HocComp.css";

const PanelMouseLogger = ({mousePosition}) => {
    if(!mousePosition)  {
        return null;
}

return (
    <div className="BasicTracker">
        <p>Mouse Position:</p>
        <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
        </div> 
    </div>
    );
};

const PointMouseLogger = ({mousePosition}) => {
    if(!mousePosition)  {
        return null;
}

return (
    <p>
    ({mousePosition.x}, {mousePosition.y})
    </p>
    );
};

export default function HocCompBefore() {
    return (
        <div className="App">
            <header className="Header">Little lemon Restaurant</header>
            <PanelMouseLogger />
            <PointMouseLogger />
        </div>
    )
}