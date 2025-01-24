// App.js
import React from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';
import './App.css';

function App() {
  return (
    <ExpenseProvider>
      <div>
        <h1>Gestionnaire de Dépenses</h1>
        <AddExpense />
        <ExpenseList />
        <TotalExpense />
      </div>
    </ExpenseProvider>
  );
}

export default App;
