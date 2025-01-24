import React from 'react';
import { useExpenseContext } from '../context/ExpenseContext';

function ExpenseItem({ expense }) {
  const { dispatch } = useExpenseContext();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_EXPENSE', payload: expense.id });
  };

  return (
    <li>
      <span>{expense.label}</span>
      <span>{expense.amount} €</span>
      <span>{expense.category}</span>
      <button onClick={handleRemove}>Supprimer</button>
    </li>
  );
}

export default ExpenseItem;
