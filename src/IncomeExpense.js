import React from 'react';
import './IncomeExpense.css';
import Income from './Income';
import Expense from './Expense';
function IncomeExpense() {
  return (
    <div className="Income-Expense-Container">
      <Income />
      <div className="Linediv"></div>
      <Expense />
    </div>
  );
}

export default IncomeExpense;