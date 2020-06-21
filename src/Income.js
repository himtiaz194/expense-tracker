import React,{useContext} from 'react';
import './Income.css'
import {TransactionContext} from './TransactionContext';

function Income() {
  let { transactions} = useContext(TransactionContext);
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount > 0)
            income = income + transactions[i].amount;
    }
    return income;
}
    return (
      <div className="IncomeContainer">
        <h3 id="Iheading">INCOME</h3>
        <h3 id="Ivalue">$ {getIncome()}</h3>
      </div>
    );
  }
  
  export default Income;