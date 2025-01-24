import React from 'react';
import { useExpenseContext } from '../context/ExpenseContext';

function TotalExpense() {
  const { state } = useExpenseContext();

  const total = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div>
      <h3>Total des dépenses : {total} €</h3>
    </div>
  );
}

export default TotalExpense;
