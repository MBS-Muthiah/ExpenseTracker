import React from 'react';

import {List as MUIList , ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryActiion,IconButton,Slide} from '@material-ui/core';
import {Delete,Moneyoff} from '@material-ui/icons';
const List = () => {
    const classes = useStyles();
    const transactions = [
        {id :1,type:"Income", category :'Salary',amount : 50, date: new Date()}
    ];
  return (
    <MUIList dense ={false} className ={classes.list}>
            {transactions.map((transaction)=>(<Slide direction ="down" in mountOnEnter unmountOnExit key ={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                </ListItemText primary ={transaction.category} secondary ={'$ ${transaction.amount} - ${transaction.date}'}>
                <ListItemSecondaryActiion>
                    <IconButton edge="end" aria-label ="delete" onclick="">
                        <Delete />
                    </IconButton>
                </ListItemSecondaryActiion>
            </Slide>))}
    </MUIList>
  )
}

export default List