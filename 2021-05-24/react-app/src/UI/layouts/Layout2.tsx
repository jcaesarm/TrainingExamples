import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center'
    },
    content: {
      padding: theme.spacing(3),
    },
  }),
);

interface Props extends RouteComponentProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
    children: any;
  window?: () => Window;
}

const Layout2 = (props: Props) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(Layout2);