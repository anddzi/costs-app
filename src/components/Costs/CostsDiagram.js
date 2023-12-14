import Diagram from "../Diagram/Diagram";

const CostsDiagram = (props) => {
  const diagramDataSets = [
    { labek: "Jan", value: 0 },
    { labek: "Feb", value: 0 },
    { labek: "Mar", value: 0 },
    { labek: "Apr", value: 0 },
    { labek: "Mai", value: 0 },
    { labek: "Jun", value: 0 },
    { labek: "Jul", value: 0 },
    { labek: "Aug", value: 0 },
    { labek: "Sep", value: 0 },
    { labek: "Nov", value: 0 },
    { labek: "Dec", value: 0 },
  ];

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth();
    diagramDataSets[costMonth].value += cost.amount;
  }

  return <Diagram dataSets={diagramDataSets}></Diagram>;
};
export default CostsDiagram;
