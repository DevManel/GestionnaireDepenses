import React, { createContext, useContext, useReducer } from 'react';
import { expenseReducer, initialState } from '../reducers/ExpenseReducer';

// Création du contexte qui va contenir l'état global des dépenses
const ExpenseContext = createContext();

// Le provider va permettre de rendre l'état global accessible à tous les composants enfants
export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}  {}
    </ExpenseContext.Provider>
  );
}

// Hook personnalisé pour accéder facilement au contexte
export const useExpenseContext = () => useContext(ExpenseContext);
