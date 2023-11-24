import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost"; 


function App() {

  const costs = [
    {
      id: "c1",
      date: new Date(2021, 1, 1),
      description: "Groceries",
      amount: 100.5,
    },
    {
      id: "c2",
      date: new Date(2021, 1, 2),
      description: "Gas",
      amount: 34.3,
    },
    {
      id: "c3",
      date: new Date(2021, 1, 3),
      description: "Dinner",
      amount: 50.8,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs cost={costs}/>
      </div>
  );
}

export default App;
