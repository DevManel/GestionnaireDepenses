// Initial state avec un tableau vide de dépenses
export const initialState = {
    expenses: [],
  };
  
  // Le reducer qui va gérer l'état des dépenses
  export function expenseReducer(state, action) {
    switch (action.type) {
  
      // Action pour ajouter une dépense
      case 'ADD_EXPENSE':
        return {
          ...state,
          expenses: [
            ...state.expenses,
            action.payload,
          ],
        };
  
      // Action pour supprimer une dépense par son id
      case 'REMOVE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.filter((expense) => expense.id !== action.payload), 
        };
  
      // Si l'action n'est pas reconnue, on retourne simplement l'état actuel
      default:
        return state;
    }
  }
  