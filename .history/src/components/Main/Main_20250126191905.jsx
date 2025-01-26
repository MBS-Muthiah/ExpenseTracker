import React from 'react'
import { Card,CardContent,Typography,Grid,Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from './InfoCard';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className ={classes.root}>
        <cardHeader title ="Expense Tracker" />
        <CardContent>
            <Typography align ="center" variant= "h5">Total Balance ${ balance }</Typography>
            <Typography variant = "subtitle1" style={{lineHeight :'1.5em',marginTop :'20px'}}>
                <InfoCard />
                
            </Typography>
            <Divider className ={classes.divider}/>
            <Form/>
        </CardContent>
        <CardContent className ={classes.cardContent}>
            <Grid container spaceing ={2}>
                <List />
            </Grid>
        </CardContent>
    </Card>
  );
} 

export default Main;