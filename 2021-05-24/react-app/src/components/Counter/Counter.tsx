import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { incrementCounterAction, decrementCounterAction} from '../../redux/actions/counter';

interface IProps {
    counter: number;
    incrementCounterAction: any;
    decrementCounterAction: any;
}
class Counter extends Component <IProps>{
  
    // state = { counter: 0 };

    onIncrementHandler = () => {
        // this.setState({counter: this.state.counter + 1});
        this.props.incrementCounterAction(1);
    }

    onDecrementHandler = () => {
        // this.setState({counter: this.state.counter - 1});
        this.props.decrementCounterAction(1);
    }

    render() {
      return (
        <div>
            <h3>Counter Value : {this.props.counter} </h3>
            <Button variant="contained" onClick={this.onIncrementHandler}>Increment</Button>
            <Button variant="contained" onClick={this.onDecrementHandler}>Decrement</Button>
        </div>
      );
    }
}

const mapStateToProps = ( store: any) => ({
    counter: store.counterKey.counter
});

export default connect(mapStateToProps, {incrementCounterAction, decrementCounterAction})(Counter);
