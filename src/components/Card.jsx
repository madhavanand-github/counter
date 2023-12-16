import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";

export default function Card() {
  return (
    <div className="card">
      <Title />
      <Count />
      <ResetButton />
      <CountButtons />
    </div>
  );
}

const Title = () => {
  return <h1 className="title">Online Counter</h1>;
};

const Count = () => {
  return <p className="count">0</p>;
};

const ResetButton = () => {
  return <button className="reset-btn"><ResetIcon className="reset-btn-icon"/></button>;
};

const CountButtons = () => {
  return (
    <div className="button-container">
      <button className="count-btn"><PlusIcon className="count-btn-icon"/></button>
      <button className="count-btn"><MinusIcon className="count-btn-icon"/></button>
    </div>
  );
};
