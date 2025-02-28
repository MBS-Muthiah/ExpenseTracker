import React from 'react';
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';

import useStyles from './Styles';

const Form = () => {
    const classes = useStyles();
  return (
    <Grid container spacing ={2}>
        <Grid item xs ={12}>
            <Typography align ="center" variant = "subtitle2" gutterBottom>
                ...
            </Typography>
        </Grid>
        <Grid item xs ={6}>
            <FormControl fullwidth>
                <InputLabel>Type</InputLabel>
                <Select>
                    <MenuItem value ="Income">INCOME</MenuItem>
                    <MenuItem value ="Expense">EXPENSE</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullwidth>
                <InputLabel>Category</InputLabel>
                <Select>
                    <MenuItem Value = "business"> Business</MenuItem>
                    <MenuItem value ="salary">Salary</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs ={6}>
            <TextField type ="number" label="Amount" fullWidth/>
        </Grid>
        <Grid item xs ={6}>
            <TextField type ="date" label="Date" fullWidth/>
        </Grid>
        <Button className ={classes.button} variant = "outlined" color = "primary" fullWidth>Create</Button>
    </Grid> 
  )
}

export default Form