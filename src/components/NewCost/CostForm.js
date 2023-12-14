import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputDescription, setInputDescription] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHandler = (event) => {
    setInputDescription(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const updateVisibleHandler = () => {
    props.onFormSubmit(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputDescription,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputDescription("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input
            type="text"
            value={inputDescription}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Summe</label>
          <input
            type="number"
            value={inputAmount}
            min="0.01"
            step="0.01 "
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Datum</label>
          <input
            type="date"
            value={inputDate}
            min="2019-01-01"
            step="2922-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Hinzufügen</button>
          <button type="button" onClick={updateVisibleHandler}>
            Schließen
          </button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
