import React ,{useReducer,CreateContext } from 'react';

import contextReducer from './contextReducer';

const initialState =[];

export const ExpenseTrackerContext = CreateContext(initialState);

export const Provider = ({ children}) => {
    const [transactions,dispatch] = useReducer(contextReducer,initialState);

    const deleteTransaction =(id) =>{
        dispatch({type :'DELETE_TRANSACTION', payload : id});
    }

    const addTransaction = (transaction) =>{
        dispatch({ type :'ADD_TRANSACTION',payload :transaction});
    }

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}