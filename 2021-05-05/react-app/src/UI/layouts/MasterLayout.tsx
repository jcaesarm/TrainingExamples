import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MyAppBar from '../AppBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const MasterLayout = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" justify="space-between" alignItems="stretch">
        <Grid item xs={12}>
          <MyAppBar/>
        </Grid>
        <Grid item xs={12}>
          {props.children}
        </Grid>
        <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>Copyright 2021 </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MasterLayout;