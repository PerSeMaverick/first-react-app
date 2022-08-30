import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  const onSavedExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // 매개변수로 받은 ExpenseForm의 expenseData를 저장하고 새로운 객체생성
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm savedExpenseData={onSavedExpenseData} />
    </div> // savedExpenseData 속성은 onSavedExpenseData함수를 가리키고 있다.
  );
}

export default NewExpense;
