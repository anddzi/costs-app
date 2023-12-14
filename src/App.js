import React, {useState} from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


const INTIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2020, 1, 1),
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
    date: new Date(2021, 3, 2),
    description: "Gas",
    amount: 34.3,
  },
  {
    id: "c4",
    date: new Date(2021, 3, 3),
    description: "Dinner",
    amount: 50.8,
  },
];

function App() {
  const [costs, setCosts] = useState(INTIAL_COSTS);

  const addCostHandler = (cost) => {
    console.log("In App.js");
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    }); 
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
