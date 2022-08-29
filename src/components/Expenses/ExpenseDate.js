import React from "react";

import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.getFullYear(); // year를 4자리로 추출하는 함수
  const month = props.date.toLocaleString("kr-KR", { month: "long" });
  const dates = props.date.toLocaleString("kr-KR", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-item__date expense-date__year">{year}</div>
      <div className="expense-item__date expense-date__month">{month}</div>
      <div className="expense-item__date expense-date__day">{dates}</div>
    </div>
  );
}

export default ExpenseDate;
