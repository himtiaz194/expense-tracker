import React,{useContext} from 'react';
import './Income.css'
import {TransactionContext} from './TransactionContext';

function Balance() {
  let { transactions} = useContext(TransactionContext);
  const getBalance = () => {
    let balance = 0;
    for (var i = 0; i < transactions.length; i++) {
            balance = balance + transactions[i].amount;
    }
    return balance;
}
    return (
      <div>
           <h3>YOUR BALANCE:<br/>$ {getBalance()}</h3> 
      </div>
    );
  }
  
  export default Balance;