import { useState } from "react";

const Body = ({ toggleMode, isDarkMode }) => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);
    
    return (
        <div className="container text-center mt-5">
            <h2 className={`text-${isDarkMode ? "dark" : "light"}`}>
                Counter: {counter}
            </h2>

            <div className="mt-4 d-flex justify-content-center gap-3">
                <button className="btn btn-success" onClick={increment}>
                    Increment
                </button>
                <button className="btn btn-danger" onClick={decrement}>
                    Decrement
                </button>
                <button className="btn btn-secondary" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Body;
