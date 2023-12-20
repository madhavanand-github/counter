import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  // Count functions
  const resetCount = () => setCount(0);
  const incrementCount = (e) => {
    setCount((prev) => prev + 1);
    e.currentTarget.blur();
  };
  const decrementCount = (e) => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
    e.currentTarget.blur();
  };

  // Pressing the space key will increment the count
  const handleKeyPress = (e) => {
    if (e.code === "Space") setCount((prev) => ((prev > 4) ? 5 : prev + 1));
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton resetCount={resetCount} />
      <ButtonContainer>
        <CountButton
          handleCount={decrementCount}
          icon={MinusIcon}
          locked={locked}
        />
        <CountButton
          handleCount={incrementCount}
          icon={PlusIcon}
          locked={locked}
        />
      </ButtonContainer>
    </div>
  );
}

const Title = ({ locked }) => {
  return (
    <h1 className="title">{locked ? "LOCKED !! Buy Pro" : "Online Counter"}</h1>
  );
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

const ButtonContainer = ({ children }) => {
  return <div className="button-container">{children}</div>;
}