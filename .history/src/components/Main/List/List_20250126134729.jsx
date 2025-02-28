import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';  // Corrected MoneyOff import
import useStyles from './Styles';  // Import your styles if needed

const List = () => {
  const classes = useStyles();
  const transactions = [
    { id: 1, type: "Income", category: 'Salary', amount: 50, date: new Date() }
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={transaction.category} 
              secondary={`$${transaction.amount} - ${transaction.date.toLocaleDateString()}`}  // Corrected string interpolation
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => {/* handle delete logic here */}}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
