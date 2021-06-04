import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface Props extends RouteComponentProps {
    children: any;
  window?: () => Window;
}

const Layout = (props: Props) => {

  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(Layout);
