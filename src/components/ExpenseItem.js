import "./ExpenseItem.css";

function ExpenseItem() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const expenseDate = new Date();

  const years = expenseDate.getFullYear();
  const month = months[expenseDate.getMonth()];
  const dates = expenseDate.getDate();

  const expenseTitle = "Car Insurance";
  const expenseAmount = 67;

  return (
    <div className="expense-item">
      <div className="expense-item__date">
        {years} {month} {dates}
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}만원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
