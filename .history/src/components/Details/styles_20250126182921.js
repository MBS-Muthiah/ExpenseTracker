import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  income: {
    backgroundColor: 'green',
    color: 'white',
  },
  expense: {
    backgroundColor: 'red',
    color: 'white',
  },
}));

export default useStyles;
