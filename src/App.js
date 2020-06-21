import React from 'react';
import IncomeExpense from './IncomeExpense';
import History from './History';
//import logo from './logo.svg';
import './App.css';
import Transaction from './Transaction';
import {TransactionProvider} from './TransactionContext'
import Balance from './Balance';

function App() {
  return (
    <div className="Container">
      <h2>Expense Tracker</h2><br/>
      <TransactionProvider>
      <Balance/>
      <IncomeExpense />
      <History />
      <Transaction/>
      </TransactionProvider>
    </div>
  );
}

export default App;
