import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"; // ..을하면 한단계 올라간다
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.item[0].title} // 여기서 item은 전달받은 item객체의 키 값,
        price={props.item[0].price} // props중에.expenses객체의[0].title
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        price={props.item[1].price}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        price={props.item[2].price}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        price={props.item[3].price}
        date={props.item[3].date}
      />
    </Card>
  );
}

export default Expenses;
