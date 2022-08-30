import React, { useState } from "react";
import "./ExpenseForm.css";

function NewExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredPrice: "",
  //   enteredDate: "",
  // });

  const onTitleChange = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput((prevState) => {   상태 업태이트가 이전 상태에 의존가능하다
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const onPriceChange = (event) => {
    setEnteredPrice(event.target.value);
  };
  const onDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: enteredDate,
    };

    //savedExpenseData 키에서 얻은값이 함수이기 때문에 실행할 수 있다
    //savedExpenseData.savedExpenseData
    props.savedExpenseData(expenseData); //NewExpense로 expenseData객체전달

    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
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
