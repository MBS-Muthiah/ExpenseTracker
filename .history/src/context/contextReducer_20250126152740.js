const transaction = [
    {id:1,},
    {id:2,}
]

const contextReducer =(state,action)=>{
    let transactions;
    switch(action.type){
        case 'DELETE_TRANSACTION':
            transactions=state.filter((t) => t.id !== action.payload);
            return transactions;
            
        case 'ADD_TRANSACTION':
            transactions = [action.payload,...state];
            return transactions;
            
        default:
            return state;
    }
    if(action.type === 'DELETE_TRANSACTION'){

    }
    else if(action.type ==='ADD_TRANSACTION'){

    }
        
    
}

export default contextReducer;