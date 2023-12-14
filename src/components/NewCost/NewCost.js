import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";

const NewCost = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  const visibleHandler = (data) => {
    setIsVisible(data);
  };

  return (
    <div className="new-cost">
      {isVisible ? (
        <CostForm onSaveCostData={saveCostDataHandler} onFormSubmit={visibleHandler} />
      ) : (
        <button type="submit" onClick={() => visibleHandler(true)}>
          Neue Einträge Hinzufügen
        </button>
      )}
    </div>
  );
};
export default NewCost;
