import React ,{useReducer,CreateContext } from 'react';

const initialState =[];

export const ExpenseTrackerContext = CreateContext(initialState);

export const Provider = ({ children}) => {
    return (
        <ExpenseTrackerContext.Provider value={{appName :'Expense Tracker'}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}