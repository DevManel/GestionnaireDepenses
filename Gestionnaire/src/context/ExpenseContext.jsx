import React, {createContext, useContext, useReducer} from "react";
import {expenseReducer, initialState} from '../reducers/ExpenseReducer';

const ExpenseContext = createContext();

export function ExpenseProvider({children}){
    const [state, dispatch] = useReducer(expenseReducer, initialState);
    return (
        <ExpenseContext.Provider value={{state, dispatch}}>
            {children}
        </ExpenseContext.Provider>
    );
}

export const useExpenseContext = () => useContext(ExpenseContext);