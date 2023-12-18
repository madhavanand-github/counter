import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  // Count functions
  const resetCount = () => setCount(0);
  const incrementCount = () => setCount((prev) => prev + 1);
  const decrementCount = () => setCount((prev) => (prev === 0 ? 0 : prev - 1));

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked}/>
      <Count count={count} />
      <ResetButton resetCount={resetCount} />
      <div className="button-container">
        <CountButton handleCount={decrementCount} icon={MinusIcon} locked={locked}/>
        <CountButton handleCount={incrementCount} icon={PlusIcon} locked={locked} />
      </div>
    </div>
  );
}

const Title = ({ locked }) => {
  return <h1 className="title">{locked ? "LOCKED !! Buy Pro" : "Online Counter"}</h1>;
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

const CountButton = ({ handleCount, icon: Icon, locked }) => {
  return (
    <button disabled={locked} className="count-btn" onClick={handleCount}>
      {Icon && <Icon className="count-btn-icon" />}
    </button>
  );
};
