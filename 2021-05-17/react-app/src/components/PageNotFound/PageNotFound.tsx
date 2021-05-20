import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import InboxIcon from '@material-ui/icons/MoveToInbox';

interface Props{
    title: string
}

class PageNotFound extends Component <Props> {
  
    render() {
      return (
        <Paper elevation={0}>
            <InboxIcon />
            <h2>{this.props.title}</h2>
            <p>The page you are looking is not available.</p>
        </Paper>
      );
    }
  }
  
export default PageNotFound;