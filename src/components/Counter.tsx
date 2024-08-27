import { useState } from "react";

export function Counter() {
  const [counter, SetCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputDecrement, setInputDecrement] = useState(0);
  const [inputIncrement, setInputIncrement] = useState(0);
  console.log(counter);
  console.log(inputDecrement);
  const increment = (numero: number = 1): void => {
    SetCounter(counter + numero);
  };
  const decrement = (numero: number = 1): void => {
    if (counter > 0) {
      SetCounter(counter - numero);
    }
  };
  const multiply = (): void => {
    const value = parseFloat(inputValue);
    if (counter > 0 && !isNaN(value)) {
      SetCounter(counter * value);
    }
  };

  const decrementInput = (inputDecrement: number): void => {
    if (counter > 0) {
      SetCounter(counter - inputDecrement);
    }
  };
  const incrementar = (inputIncrement: number): void => {
    if (counter >= 0) {
      SetCounter(counter + inputIncrement);
    }
  };

  return (
    <div>
      <p>contador {counter}</p>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      Ingresa el valor a decrementar o aumentar
      <input
        type="number"
        value={inputDecrement}
        onChange={(e) => setInputDecrement(Number(e.target.value))}
      />
      <input
        value={inputIncrement}
        onChange={(e) => setInputIncrement(Number(e.target.value))}
      ></input>
      Ingresa el valor a decrementar o aumentars
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(2)}>+2</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => multiply()}>multiply</button>
      <button onClick={() => SetCounter(0)}>reset</button>
      <button onClick={() => decrementInput(inputDecrement)}>
        decrementsss
      </button>
      <button onClick={() => incrementar(inputIncrement)}>incrementazzz</button>
    </div>
  );
}
