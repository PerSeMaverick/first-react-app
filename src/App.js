import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const onAddNewExpense = (expenses) => {
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddNewExpense={onAddNewExpense} />
      <Expenses item={expenses} /* item이 expenses객체를 가리키고 있다.*/ />
    </div>
  );
}; // item 객체를 props값으로 전달

export default App;
