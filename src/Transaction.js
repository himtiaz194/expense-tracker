import React, {useState, useReducer, useContext} from 'react';
import './Transaction.css';
import TransactionReducer from './TransactionReducer';
import {TransactionContext} from './TransactionContext';

function Transaction() {
    //let transactions= useContext(TransactionContext)
    let { transactions, addTransaction } = useContext(TransactionContext);
    let[T_Text,setT_Text]=useState(null);
    let[T_Value,setT_Value]=useState(0);
    
    const handleform=(event) => {
      event.preventDefault();
    //console.log(T_Text,T_Value);
    if (Number(T_Value) === 0) {
      alert("Please enter correct value");
      return false;
  }
  addTransaction({
      amount: Number(T_Value),
      desc: T_Text
  });

  setT_Text('');
  setT_Value(0)
  document.getElementById("myForm").reset();         
    }

  
  return (
    <div className="TransactionContainer">
      <div className="Transactiontitle">
        <h3>Add a New Transaction</h3>
        </div>
        <br/>
        <div className="textarea">
            <form id="myForm" onSubmit={handleform}> 
            <label>Text</label><br/>
            <input id="Tran_Text" placeholder="Enter Text" onChange={(e)=>setT_Text(e.target.value)} required/><br/>
            <label >Amount (negative - expense, positive - income)</label><br/>
            <input type="number" id="amount" placeholder="Enter amount..." onChange={(e)=>setT_Value(e.target.value)} required/>
            <input type='submit' value="Add Transaction" />
            </form>
        </div>
    </div>
  );
}

export default Transaction;
