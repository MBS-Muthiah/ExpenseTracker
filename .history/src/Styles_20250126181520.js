import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'block', // Show on screens >= 'sm'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none', // Hide on screens < 'sm'
    },
  },
  mobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none', // Hide on screens >= 'sm'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block', // Show on screens < 'sm'
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%', // Add padding only on larger screens
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px', // Customize padding for smaller screens
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2), // Add margin to grid items
    },
  },
}));
