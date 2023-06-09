import React, { useState, useEffect, useRef } from 'react';

const TestOne = (props) => {
    const [clicks, setClicks] = useState(0);
    const myComponentDivRef = useRef(null);

    useEffect(() => {
        const clickHandler = () => {
            setClicks(prevClicks => prevClicks + 1);
        };
        const divElement = myComponentDivRef.current;

        divElement.addEventListener('click', clickHandler);

        return () => {
            divElement.removeEventListener('click', clickHandler);
        };
    }, []);

  return (
        <div className="my-component" ref={myComponentDivRef}>
            <h2>Question #1 - React - Identify the Problem and Refactor</h2>
            <h3>A component that calculates the sum of all clicks inside the component. <br/>(Number of Clicks: ({clicks}))</h3>
            <p>Some problems that I noticed are:</p>
            <ul>
                <li>The code is written inside a class component makes the code less readable and maintainable</li>
                <li>Ref usage will be better if it uses <samp>`createRef`</samp> or <samp>`useRef`</samp> hooks instead of this.ref</li>
                <li>It will be much simplier if we use <samp>`useEffect`</samp> hook because we can include <samp>`addEventListener`</samp> and <samp>`removeEventListener`</samp> at the same time.</li>
                <li>code writing error like in <samp>`clickHandler`</samp> function, <samp>`this.clicks`</samp> should be <samp>`this.state.clicks`</samp></li>
            </ul>
        </div>
    )
}

export default TestOne;