import React, { useState } from "react";
import "./ExpenseForm.css";

function NewExpenseForm() {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredPrice, setenteredPrice] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredPrice: "",
  //   enteredDate: "",
  // });

  const onTitleChange = (event) => {
    setenteredTitle(event.target.value);

    // setUserInput((prevState) => {   상태 업태이트가 이전 상태에 의존가능하다
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const onPriceChange = (event) => {
    setenteredPrice(event.target.value);
  };
  const onDateChange = (event) => {
    setenteredDate(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: enteredDate,
    };
    setenteredTitle("");
    setenteredPrice("");
    setenteredDate("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:{enteredTitle}</label>
          <input type="text" value={enteredTitle} onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>${enteredPrice}</label>
          <input
            type="number"
            value={enteredPrice}
            min="0.01"
            step="0.01"
            onChange={onPriceChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:{enteredDate}</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={onDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
