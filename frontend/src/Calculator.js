import React, { useState } from "react";
import axios from "axios";

function Calculator() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    try {
      const response = await axios.post("http://localhost:8000/calculate/", {
        x: parseFloat(x),
        y: parseFloat(y),
        operator,
      });
      setResult(response.data.result);
    } catch (error) {
      setResult("エラー: " + error.response.data.error);
    }
  };

  return (
    <div>
      <h1>電卓アプリ</h1>
      <input
        type="number"
        placeholder="数値1"
        value={x}
        onChange={(e) => setX(e.target.value)}
      />
      <input
        type="text"
        placeholder="演算子 (+, -, *, /)"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      />
      <input
        type="number"
        placeholder="数値2"
        value={y}
        onChange={(e) => setY(e.target.value)}
      />
      <button onClick={calculate}>計算</button>
      {result !== null && <div>結果: {result}</div>}
    </div>
  );
}

export default Calculator;
