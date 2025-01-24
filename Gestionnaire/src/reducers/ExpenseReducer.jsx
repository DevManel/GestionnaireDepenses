export const initialState = {
    expenses: [],
};


export function expenseReducer(state, action){
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'REMOVE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload.id),
            };
        default:
            return state;
    }
}