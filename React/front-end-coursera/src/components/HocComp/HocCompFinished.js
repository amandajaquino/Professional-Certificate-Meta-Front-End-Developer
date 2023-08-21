import React, { useState, useEffect } from "react";
import "./HocComp.css";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []); // Empty dependency array to run the effect only once

    return <WrappedComponent mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
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

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <p>
    Point Mouse Position:
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function HocCompFinished() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default HocCompFinished;