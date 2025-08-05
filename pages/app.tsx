import { render } from "solid-js/web";
import { createSignal, type Component } from "solid-js";

const App: Component = () =>{
    const [count, setCount] = createSignal(0);

    const increase = () => setCount(value => value + 1);

    return (
        <div style={{ display: "flex", "justify-content": "center", "align-items": "center", "flex-direction": "column", gap: "5px" }}>
            Click the button below to increase the value
            <div>{count()}</div>
            <div>
                <button onclick={increase}>click me please</button>
            </div>
        </div>
    );
}

render(() => <App />, document.getElementById("root")!);