import React, { Component } from 'react';
import { Theme, withStyles, StyleRules } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme: Theme):StyleRules => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      // width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
});

interface IProps {
  classes:any;
}

class Inbox extends Component<IProps> {
  
  // constructor(){
  //   super();
  //   console.log('Inbox construcor');
  // }

  render( ) {
    console.log('Inbox render');
    //to fetch data from backend
    return (
      <div className={this.props.classes.root}>
        <Paper elevation={1}>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        </Paper>
      </div>
    );
  }

  componentDidMount( ){
    console.log('Inbox componentDidMount');
  }
}
  

export default withStyles(useStyles)(Inbox);

// import React from 'react';
// import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       '& > *': {
//         margin: theme.spacing(1),
//         // width: theme.spacing(16),
//         height: theme.spacing(16),
//       },
//     },
//   }),
// );

// const Inbox = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper elevation={1}>
//         <Typography variant="subtitle2" gutterBottom>
//           subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
//         unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
//         dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
//       </Typography>
//       </Paper>
//     </div>
//   );
// }

// export default Inbox;