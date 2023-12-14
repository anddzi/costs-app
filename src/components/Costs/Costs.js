import Card from "../UI/Card";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const filtredCosts = props.costs.filter((filtredYear) => {
    return filtredYear.date.getFullYear().toString() === selectedYear;
  });

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };


  return (
    <div>
      <Card className={"costs"}>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filtredCosts}/>
        <CostList costs={filtredCosts}/>
      </Card>
    </div>
  );
};

export default Costs;
