import "./HelloWorldAnimation.module.css"
import { ReactTyped } from "react-typed";

function HelloWorldAnimation() {
    return (
        <>
            <h1>
                <ReactTyped
                    strings={["Hello, World!"]}
                    loop
                    typeSpeed={110}
                    backSpeed={110}
                    startDelay={500}
                    backDelay={1000}
                    cursorChar="█"
                    showCursor={true}
                />
            </h1>
        </>
    );
}

export default HelloWorldAnimation;