export default function Card() {
  return (
    <div>
      <Title />
      <Count />
      <ResetButton />
      <CountButtons />
    </div>
  );
}

const Title = () => {
  return <h1>Online Counter</h1>;
};

const Count = () => {
  return <p>0</p>;
};

const ResetButton = () => {
  return <button>Reset</button>;
};

const CountButtons = () => {
  return (
    <div>
      <button>+</button>
      <button>-</button>
    </div>
  );
};
