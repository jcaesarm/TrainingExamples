import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        height: theme.spacing(16),
      },
    },
  }),
);

const MyPaper = ( props:any ) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1}>
      <Typography variant="h5" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
          {props.body}
        </Typography>
        <Button color="primary" onClick={props.clicked}>Details...</Button>
      </Paper>
    </div>
  );
}

export default MyPaper;
