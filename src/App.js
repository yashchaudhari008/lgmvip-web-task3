import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [isResetting, setIsResetting] = useState(false);

  const clearDisplay = () => {
    if (!isResetting) setDisplay("");
  };

  const updateDisplay = (token) => {
    if (!isResetting)
      setDisplay((oldDisplay) => {
        if (oldDisplay == "Infinity") {
          return "";
        }
        return oldDisplay + token;
      });
  };

  const calculate = () => {
    let result = "";
    try {
      result = eval(display);
    } catch (err) {
      result = "Error";
      setIsResetting(true);
      setTimeout(() => {
        clearDisplay();
        setIsResetting(false);
      }, 2000);
    }
    setDisplay(result ? result : "");
  };

  return (
    <div className="App">
      <h1 className="AppHeading">Calculator</h1>
      <div className="Calculator">
        <div className="elementRow">
          <p className="display">{display ? display : "0"}</p>
        </div>
        <div className="elementRow">
          <button onClick={() => updateDisplay("1")}>1</button>
          <button onClick={() => updateDisplay("2")}>2</button>
          <button onClick={() => updateDisplay("3")}>3</button>
          <button onClick={() => updateDisplay("/")}>/</button>
        </div>
        <div className="elementRow">
          <button onClick={() => updateDisplay("4")}>4</button>
          <button onClick={() => updateDisplay("5")}>5</button>
          <button onClick={() => updateDisplay("6")}>6</button>
          <button onClick={() => updateDisplay("-")}>-</button>
        </div>
        <div className="elementRow">
          <button onClick={() => updateDisplay("7")}>7</button>
          <button onClick={() => updateDisplay("8")}>8</button>
          <button onClick={() => updateDisplay("9")}>9</button>
          <button onClick={() => updateDisplay("*")}>*</button>
        </div>
        <div className="elementRow">
          <button onClick={() => updateDisplay(".")}>.</button>
          <button onClick={() => updateDisplay("0")}>0</button>
          <button onClick={clearDisplay} className="orange">
            Del
          </button>
          <button onClick={() => updateDisplay("+")}>+</button>

        </div>
        <div className="elementRow">
        <button onClick={() => updateDisplay("(")}>(</button>
        <button onClick={() => updateDisplay(")")}>)</button>
          <button onClick={clearDisplay} className="orange">
            Ac
          </button>
          <button onClick={calculate} className="orange">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
