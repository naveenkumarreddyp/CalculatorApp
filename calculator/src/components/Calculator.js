import React, { useState } from "react";

const Calculator = () => {
  const [prevAnswer, setPrevAnswer] = useState("");
  const [answer, setAnswer] = useState("0");
  const [operand, setOperand] = useState("");

  const handleOperand = (e) => {
    const value = e.target.value;

    // set operand values
    setOperand((op) => op + value);
  };

  const handleOperator = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "ac") {
      setOperand("");
      if (answer > 0) {
        setPrevAnswer(answer);
      }
      setAnswer(0);
      return;
    }
    // handle plus and minus button
    if (value === "pm") {
      if (operand === "") {
        return;
      }
      let calculated;
      if (Number(operand.slice(-1))) {
        calculated = eval(operand);
        if (Math.sign(calculated) < 0) {
          calculated = Math.abs(calculated);
          setOperand(calculated.toString());
          return;
        } else {
          setOperand("-" + calculated.toString());
          return;
        }
      }
    }

    let newOperand;
    if (operand.slice(-1) === value) {
      return;
    } else {
      if (!Number(operand.slice(-1))) {
        newOperand = operand.slice(0, -1);
        if (Number(operand.slice(-1)) === 0) {
          setOperand(newOperand + "0" + value);
          return;
        }
        setOperand(newOperand + value);
      } else {
        setOperand(operand + value);
      }
    }
    switch (value) {
      case "=":
        setAnswer(eval(operand));
        setOperand("");
        if (answer > 0) setPrevAnswer(answer);
        break;
      case "+":
        setOperand(eval(operand) + value);
        break;
      case "-":
        setOperand(`${eval(operand)}${value}`);
        break;
      case "/":
        setOperand(`${eval(operand)}${value}`);
        break;
      default:
        return;
    }
  };
  const handleDelete = () => {
    if (operand.length > 0) {
      setOperand((op) => op.slice(0, -1));
    }
  };
  return (
    <div className="calculator">
      <div className="c-wrapper">
        <div className="ctc c-type">
          <button className="active">Calculator</button>
          <button className="">Converter</button>
        </div>
        <div className="ctc c-screen">
          <div className="c-history-answer">
            <i className="fa-solid fa-clock"></i>
            <span>{prevAnswer}</span>
          </div>
          <div className="c-answer">
            <span>{answer}</span>
          </div>
        </div>
        <div className="ctc c-compute">
          <button className="c-reverse" onClick={handleDelete} value="rv">
            <i className="fa-solid fa-rotate-left"></i>
          </button>
          <span>{operand ? operand : "0"}</span>
        </div>
        <div className="c-grid">
          <button
            type="button"
            className="top-btn"
            onClick={handleOperator}
            value="ac"
          >
            AC
          </button>
          <button
            type="button"
            className="top-btn"
            onClick={handleOperator}
            value="pm"
          >
            &plusmn;
          </button>
          <button
            type="button"
            className="top-btn"
            onClick={handleOperator}
            value="%"
          >
            %
          </button>
          <button
            type="button"
            className="top-btn special"
            onClick={handleOperator}
            value="/"
          >
            /
          </button>

          <button className="normal" onClick={handleOperand} value="7">
            7
          </button>
          <button className="normal" onClick={handleOperand} value="8">
            8
          </button>
          <button className="normal" onClick={handleOperand} value="9">
            9
          </button>
          <button className="special" onClick={handleOperator} value="*">
            x
          </button>
          <button className="normal" onClick={handleOperand} value="4">
            4
          </button>
          <button className="normal" onClick={handleOperand} value="5">
            5
          </button>
          <button className="normal" onClick={handleOperand} value="6">
            6
          </button>
          <button className="special" onClick={handleOperator} value="-">
            -
          </button>
          <button className="normal" onClick={handleOperand} value="1">
            1
          </button>
          <button className="normal" onClick={handleOperand} value="2">
            2
          </button>
          <button className="normal" onClick={handleOperand} value="3">
            3
          </button>
          <button className="special" onClick={handleOperator} value="+">
            +
          </button>
          <button className="span-two normal" onClick={handleOperand} value="0">
            0
          </button>
          <button className="normal" onClick={handleOperator} value=".">
            .
          </button>
          <button className="special" onClick={handleOperator} value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
