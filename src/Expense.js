import React,{useContext} from 'react';
import './Expense.css'
import {TransactionContext} from './TransactionContext';

function Expense() {
  let { transactions} = useContext(TransactionContext);
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount < 0)
            expense += transactions[i].amount
    }
    return expense;
}
    return (
      <div className="ExpenseContainer">
        <h3 id="Eheading">EXPENSE</h3>
    <h3 id="Evalue">$ {getExpense()}</h3>
      </div>
    );
  }
  
  export default Expense;