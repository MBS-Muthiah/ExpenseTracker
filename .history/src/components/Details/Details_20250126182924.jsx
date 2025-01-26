import React, { useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Pie } from 'react-chartjs-2'; // Assuming you're using react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  useEffect(() => {
    // Add any necessary side effects (if needed)
  }, [title]);

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
