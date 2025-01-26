import React, { useContext } from 'react';  // Import useContext from React
import { Card, CardContent, Typography, Grid, Divider, CardHeader } from '@material-ui/core'; // Make sure to import CardHeader
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from './InfoCard';
import { ExpenseTrackerContext } from '../../context/context';  // Import ExpenseTrackerContext from the correct file

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext); // Access balance from context

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <List />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
