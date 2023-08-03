import React from "react";
import useMouseTracker from "./MouseTracker/MouseTracker";


function App() {
    const {coordinates} = useMouseTracker();

    
    return (
        <section>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
        </section>
    )
}
export default App;