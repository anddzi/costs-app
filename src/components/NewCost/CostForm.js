import React, {useState} from 'react';
import'./CostForm.css';
const CostForm = (props) => {

const [inputName, setInputName] = useState('');
const [inputSum, setInputSum] = useState('');
const [inputDate, setInputDate] = useState('');


/* const  [userInput, setUserInput] = useState( {   
    name: '',
    sum: '',
    date: '' 
});
  */
    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        //setUserInput({
          //  ...userInput,
           // name: event.target.value
        //});
/*         setUserInput((prevState) => {
            return {...prevState, name: event.target.value};
        }); */
    };

    const amountChangeHandler = (event) => {    
        setInputSum(event.target.value);
       // setUserInput({
         //   ...userInput,
           // sum: event.target.value
        //});

/*         setUserInput((prevState) => {   
            return {...prevState, sum: event.target.value};
        }); */
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
       // setUserInput({
         //   ...userInput,
           // date: event.target.value
        //});

/*         setUserInput((prevState) => {
            return {...prevState, date: event.target.value};
        }); */
    };

const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
        name: inputName,
        sum: inputSum,
        date: new Date(inputDate)
    };
    props.onSaveCostData(costData);
    setInputName('');
    setInputSum('');
    setInputDate('');
}

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Name</label>
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Summe</label>
                <input type="number" value={inputSum} min="0.01" step="0.01 " onChange={amountChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Date</label>
                <input type="date" value={inputDate} min="2019-01-01" step="2922-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button type="submit">Add Cost</button>
            </div>
        </div>
    </form>
};
export default CostForm;