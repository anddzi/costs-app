import Costitem from "./Costitem";
import Card from "../UI/Card";
import './Costs.css';
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

function Costs(props) {

    const [filteredYear, setFilteredYear] = useState('2021');

    const chnageYearHandler = (year) => {
        setFilteredYear(year);
    }

    return (
        <div>
            <Card className={'costs'}>
                <CostsFilter year={filteredYear} onChangeYear={chnageYearHandler} />
                <Costitem
                    date={props.cost[0].date}
                    description={props.cost[0].description}
                    amount={props.cost[0].amount}
                />
                <Costitem
                    date={props.cost[1].date}
                    description={props.cost[1].description}
                    amount={props.cost[1].amount}
                />
                <Costitem
                    date={props.cost[2].date}
                    description={props.cost[2].description}
                    amount={props.cost[2].amount}
                />
            </Card>
        </div>
    )

}

export default Costs;
