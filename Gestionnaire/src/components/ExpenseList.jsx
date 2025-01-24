import React from 'react';
import { useExpenseContext } from '../context/ExpenseContext';
import ExpenseItem from './ExpenseItem';

function ExpenseList() {
  const { state } = useExpenseContext();

  return (
    <div>
      <h2>Dépenses</h2>
      <ul>
        {state.expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
