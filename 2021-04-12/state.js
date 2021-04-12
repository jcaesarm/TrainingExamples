//State in Funtional / Class components

//Functional components with state
const Form = ( props ) => {

    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');

    const titleChangeHandler = ( event ) => {
        setTitle(event.target.value);
    }
    
    const descChangeHandler = ( event ) => {
        setDesc(event.target.value);
    }

    const submitButtonHandler = ( event ) => {
        console.log(`
        Title : ${title}
        Description : ${desc}`);
    }

    return (
        <div className="Box">
            <h2>Funtional component</h2>
            <h3>{props.name}</h3>
            <label>Blog title</label><br />
            <input type="text" onChange={titleChangeHandler} /><br />
            <label>Blog Description</label><br />
            <textarea onChange={descChangeHandler}/><br />
            <button onClick={submitButtonHandler}>Add Blog</button>
        </div>
    );
}

//Class components with state
class Form1 extends React.Component {
    
    constructor(){
        super();
        console.log("Constructor")
    }

    state = {title: '', desc:''};

    titleChangeHandler = ( event ) => {
        this.setState( {...this.state, title: event.target.value} );
        //this.state.title=event.target.value;
        // const newObject={title:'',desc:''};
        // this.setState(newObject);
        // this.setState({title:event.target.value,desc:''});
    }

    descChangeHandler = ( event ) => {
        this.setState( {...this.state, desc: event.target.value} );
        //this.state.desc=event.target.value;
        // this.setState({title:'',desc:event.target.value});
    }

    submitButtonHandler = ( event ) => {
        console.log(`
        Title : ${this.state.title}
        Description : ${this.state.desc}`);
    }

    render( ){
        console.log('render');
        return (
            <div className="Box">
                <h2>Class component</h2>
                <h3>{this.props.name}</h3>
                <label>Blog title</label><br />
                <input type="text" onChange={this.titleChangeHandler} /><br />
                <label>Blog Description</label><br />
                <textarea onChange={this.descChangeHandler}/><br />
                <button onClick={this.submitButtonHandler}>Add Blog</button>
            </div>
        );
    }

    componentDidMount( ){
        console.log('componentDidMount');
    }

    componentDidUpdate( ){
        console.log('componentDidUpdate');
    }

    componentWillUnmount( ){
        console.log('componentWillUnmount');
    }
    
}

class App extends React.Component {

    render() {
        return(
            <div className="App">
                {/* <Form name="My Blog"/> */}
                <Form1 name="My Blog"/>
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root'));