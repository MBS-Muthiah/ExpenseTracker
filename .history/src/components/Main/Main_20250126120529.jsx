import React from 'react'
import { Card, CardHeader, CardContent,Typography,Grid,Divider } from '@material-ui/core';
import useStyles from './styles';

const Main = () => {
  return (
    <Card className ={classes.root}>
        <cardHeader title ="Expense Tracker" subheader="Powered by Speechly"/>
    </Card>
  )
}

export default Main