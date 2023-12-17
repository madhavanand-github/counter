import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);

  // Count functions
  const resetCount = () => setCount(0);
  const incrementCount = () => setCount((prev) => prev + 1);
  const decrementCount = () => setCount((prev) => prev - 1);

  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton resetCount={resetCount} />
      <CountButtons
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </div>
  );
}

const Title = () => {
  return <h1 className="title">Online Counter</h1>;
};

const Count = ({ count }) => {
  return <p className="count">{count}</p>;
};

const ResetButton = ({ resetCount }) => {
  return (
    <button className="reset-btn" onClick={resetCount}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

const CountButtons = ({ incrementCount, decrementCount }) => {
  return (
    <div className="button-container">
      <button className="count-btn" onClick={incrementCount}>
        <PlusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn" onClick={decrementCount}>
        <MinusIcon className="count-btn-icon" />
      </button>
    </div>
  );
};
