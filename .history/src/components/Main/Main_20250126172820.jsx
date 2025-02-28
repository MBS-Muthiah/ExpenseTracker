import React from 'react'
import { Card, CardHeader, CardContent,Typography,Grid,Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from './InfoCard';

const Main = () => {
    const classes = useStyles();
  return (
    <Card className ={classes.root}>
        <cardHeader title ="Expense Tracker" subheader="Powered by Speechly"/>
        <CardContent>
            <Typography align ="center" variant= "h5">Total Balance Rs100</Typography>
            <Typography variant = "subtitle1" style={{lineHeight :'1.5em',marginTop :'20px'}}>
                <InfoCard />
                Try saying : Add income for Rs.100 in Category for Monday...
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

export default Main