import "./CostItem.css"
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, {useState} from "react";

function Costitem(props) {

    const [description, setDescription] = useState(props.description);
    const chnageDescriptionHandler = () => {
        setDescription('New cost');
        console.log('CHanged')
    }

    return (
        <Card className={'cost-item'}>
            <CostDate date={props.date}/>
            <div className={'cost-item__description'}>
                <h2>{description}</h2>
                <div className={'cost-item__price'}>${props.amount}</div>
            </div>
            <button onClick={chnageDescriptionHandler}>Change Desription</button>
        </Card>
    )
}

export default Costitem;
