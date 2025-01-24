import React from 'react';
import { useExpenseContext } from '../context/ExpenseContext';

function TotalExpense() {
  // Récupération de l'état des dépenses via le contexte
  const { state } = useExpenseContext();

  // Calcul du total des dépenses avec reduce
  const total = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div>
      <h3>Total des dépenses : {total} €</h3>
    </div>
  );
}

export default TotalExpense;
