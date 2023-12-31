import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function Card() {

  const [count, setCount] = useState(0);

  // Functions to update the count
  const updateCount = (updater) => (e) => {
    setCount(updater);
    e.currentTarget.blur();
  };
  
  const resetCount = updateCount(() => 0);
  const incrementCount = updateCount((prev) => prev + 1);
  const decrementCount = updateCount((prev) => (prev === 0 ? 0 : prev - 1));

  // Pressing the space key will increment the count
  const handleKeyPress = (e) => {
    if (e.code === "Space") setCount((prev) => (prev + 1));
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  // Decrease the font size on increasing the count
  const setFontSize = (textLength) => {
    
    const countEl = document.getElementById("count");
    const min = Math.max((100 - (textLength * 10)), 40 );
    const max = Math.max((200 - (textLength * 16)), 80);
    countEl.style.fontSize = `clamp(${min}px, 20vw, ${max}px)`;
  };

  useEffect(() => {
    setFontSize(count.toString().length);
  }, [count]);

  return (
    <div className={`card`}>
      <Title />
      <Count count={count} />
      <ResetButton resetCount={resetCount} />
      <ButtonContainer>
        <CountButton
          handleCount={decrementCount}
          icon={MinusIcon}
        />
        <CountButton
          handleCount={incrementCount}
          icon={PlusIcon}
        />
      </ButtonContainer>
    </div>
  );
}

const Title = () => {
  return (
    <h1 className="title">{"Online Counter"}</h1>
  );
};

const Count = ({ count }) => {
  return (
    <p className="count" id="count">
      {count}
    </p>
  );
};

const ResetButton = ({ resetCount }) => {
  return (
    <button className="reset-btn" onClick={resetCount}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

const CountButton = ({ handleCount, icon: Icon}) => {
  return (
    <button  className="count-btn" onClick={handleCount}>
      {Icon && <Icon className="count-btn-icon" />}
    </button>
  );
};

const ButtonContainer = ({ children }) => {
  return <div className="button-container">{children}</div>;
}