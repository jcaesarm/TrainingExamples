import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// function addProps(component: any){
//   //adding extra props to injected components
//   return component;
// }
// const modCom = addProps(MyAppBar);

// Higher Order Component (HOC)
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface Props extends RouteComponentProps{
  isAuthenticated: boolean;
}

const MyAppBar = ( props: Props ) => {

  const classes = useStyles();

  const homeButtonClickHanlder = () => {
    props.history.push( {pathname: '/'} );

  }
  const adminButtonClickHanlder = () => {
    props.history.push( {pathname: '/admin'} );
  }

  const loginButtonClickHanlder = () => {
    props.history.push( {pathname: '/login'} );
  }

  const logoutButtonClickHanlder = () => {
    // props.history.push( {pathname: '/login'} );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Application
          </Typography>
          <Button color="inherit" onClick={homeButtonClickHanlder}>Home</Button>
          <Button color="inherit" onClick={adminButtonClickHanlder}>Admin</Button>
          {props.isAuthenticated ?
              <Button color="inherit"onClick={logoutButtonClickHanlder}>Logout</Button>
            : <Button color="inherit"onClick={loginButtonClickHanlder}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = ( store: any) => ({
  isAuthenticated: store.auth.isAuthenticated
});


export default connect(mapStateToProps) (withRouter(MyAppBar));
