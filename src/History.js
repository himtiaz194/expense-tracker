import React, { useContext } from 'react';
import './History.css';
import { TransactionContext } from './TransactionContext';

function History() {
  let { transactions} = useContext(TransactionContext);
  //let {transaction}= useContext(TransactionContext);
  console.log(transactions);
  /*let transaction= [
    {amount:500, desc: "cash"},
    {amount:-500, desc: "cash"},
    {amount:500, desc: "cash"}
  ]*/

  return (
    <div className="HistoryContainer">
      <div className="historytitle">
        <h3>History</h3>
        </div>
        <div className="HistoryList">
          <ul className="TransactionList">
            {transactions.map((transObj,index) =>{ return(
           
           <li key={index}>
              <span className="T-Text">{transObj.desc}</span>
              <span className='amount'>{transObj.amount}</span>
              <span className={`box ${transObj.amount > 0 ? "positive": "negative"}`}></span>
            </li>
      

            )
          }
          )
          }
            
          </ul>
        </div>
    </div>
  );
}

export default History;
