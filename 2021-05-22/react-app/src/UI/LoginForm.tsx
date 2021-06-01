import { useEffect, useRef, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { green } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(50),
      },
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }),
);

interface IProps{
  loginHandler: any;
}

export default function LoginForm( props: IProps) {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<number>();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const emailChangeHandler =( event: any) => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler =( event: any) => {
    setPassword(event.target.value);
  }

  const loginClickHandler = ( event: any) => {
    props.loginHandler(email, password);
  }

  return (
    <Paper>
      <form className={classes.root} noValidate autoComplete="off">
        <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} onChange={emailChangeHandler}/><br/>
        <Input placeholder="Password" inputProps={{ 'aria-label': 'description'}} onChange={passwordChangeHandler} /><br/>
       
        <Button variant="contained" color="primary" className={buttonClassname} disabled={loading} onClick={handleButtonClick}>Login</Button>
        {/* <Button variant="contained" color="primary" onClick={loginClickHandler}></Button> */}
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
       </form>
    </Paper>
  );
}
