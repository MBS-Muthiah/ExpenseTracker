import React,{useState} from 'react';
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';

import useStyles from './Styles';

const initialState = {
    amount :'',
    category:'',
    type:'Income',
    date:new Date(),
}

const Form = () => {
    const classes = useStyles();
    const [formData,setFormData] = useState(initialState);
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
                
                <Select value = {formData.type} onChange={(e) =>setFormData({...formDat,type:e.target.value})}>
                    <MenuItem value ="Income">INCOME</MenuItem>
                    <MenuItem value ="Expense">EXPENSE</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullwidth>
                <InputLabel>Category</InputLabel>
                <Select value={formData.category} onchange ={(e)=> setFormData({...formData,category:e.target.value })}>
                    <MenuItem Value = "business"> Business</MenuItem>
                    <MenuItem value ="salary">Salary</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs ={6}>
            <TextField type ="number" label="Amount" fullWidth value={formData.amount} onChange={(e) =>setFormData({...formData,amount :e.target.value})}/>
        </Grid>
        <Grid item xs ={6}>
            <TextField type ="date" label="Date" fullWidth value={formData.date} onChange={(e) =>setFormData({...formData,date :e.target.value})}/>
        </Grid>
        <Button className ={classes.button} variant = "outlined" color = "primary" fullWidth>Create</Button>
    </Grid> 
  )
}

export default Form