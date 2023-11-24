import Costs from "./components/Costs/Costs";

function App() {

  const costs = [
    {
      date: new Date(2021, 1, 1),
      description: "Groceries",
      amount: 100.5,
    },
    {
      date: new Date(2021, 1, 2),
      description: "Gas",
      amount: 34.3,
    },
    {
      date: new Date(2021, 1, 3),
      description: "Dinner",
      amount: 50.8,
    },
  ];

  return (
    <div>
      <h1>Hello World!</h1>
      <Costs cost={costs}/>
      </div>
  );
}

export default App;
