import React, { useState } from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0",
};

const styles = {
  border: "2px solid #000",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 2px #ccc",
  width: "300px",
  textAlign: "center",
  justifycontent: "center",
};

const buttonStyle = {
  width: "60px",
  height: "60px",
  fontSize: "18px",
  margin: "5px",
  cursor: "pointer",
};

function XCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleNumClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClearInputValFromScreen = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      if (input === "") {
        setResult("Error");
        return;
      }
      let evalResult = eval(input);
      if (isNaN(evalResult)) {
        setResult("NaN");
      } else if (!isFinite(evalResult)) {
        setResult("Infinity");
      } else {
        setResult(evalResult.toString());
        setInput(evalResult.toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={styles}>
        <h1> React Calculator</h1>
        <input type="text" value={input} />
        <div className="result">{result}</div>
        <div>
          <button onClick={() => handleNumClick("7")} style={buttonStyle}>
            7
          </button>
          <button onClick={() => handleNumClick("8")} style={buttonStyle}>
            8
          </button>
          <button onClick={() => handleNumClick("9")} style={buttonStyle}>
            9
          </button>
          <button onClick={() => handleNumClick("/")} style={buttonStyle}>
            /
          </button>

          <button onClick={() => handleNumClick("4")} style={buttonStyle}>
            4
          </button>
          <button onClick={() => handleNumClick("5")} style={buttonStyle}>
            5
          </button>
          <button onClick={() => handleNumClick("6")} style={buttonStyle}>
            6
          </button>
          <button onClick={() => handleNumClick("*")} style={buttonStyle}>
            *
          </button>

          <button onClick={() => handleNumClick("1")} style={buttonStyle}>
            1
          </button>
          <button onClick={() => handleNumClick("2")} style={buttonStyle}>
            2
          </button>
          <button onClick={() => handleNumClick("3")} style={buttonStyle}>
            3
          </button>
          <button onClick={() => handleNumClick("-")} style={buttonStyle}>
            -
          </button>

          <button onClick={() => handleNumClick("0")} style={buttonStyle}>
            0
          </button>
          <button onClick={handleClearInputValFromScreen} style={buttonStyle}>
            C
          </button>
          <button onClick={handleCalculate} style={buttonStyle}>
            =
          </button>
          <button onClick={() => handleNumClick("+")} style={buttonStyle}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default XCalculator;
