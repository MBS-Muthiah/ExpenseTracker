// Move all the imports to the top of the file
import React from 'react'; // Make sure this is the first import
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Pie } from 'react-chartjs-2'; // Assuming you're using react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">Rs.{total}</Typography>
        <Pie data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
