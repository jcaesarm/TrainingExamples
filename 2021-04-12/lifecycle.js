// LIFECYCLE
//Class Component with Lifecycle

const View1 = ( props )=> {
    React.useEffect( () => {
        console.log("RunsEverytime")
    });
    React.useEffect( () => {
        console.log("Runs when component is mounted");
    },[]);
    React.useEffect( () => {
        console.log("Runs when component prop/ state is updated");
    },[props.title]);
    React.useEffect( () => {
        console.log("Runs when component prop/ state is updated");
    },[props.desc]);
    React.useEffect( () => {
        console.log("Runs when component is unmounted");
    });
    
    return(
        <div className="App">
            <div className="Box">
                <h1>Apple</h1>
                <p>Price: 50</p>
            </div>
        </div>
    );
}

class Product extends React.Component{
    constructor ( ) {
        super();
        console.log("Constructor")
    }

    render ( ) {
        console.log("Render");
        return(
            <div className="Box">
             <h1>Apple</h1>
             <p>Price: 50</p>
         </div>
        );
    }
    componentDidMount ( ) {
        console.log("componentDidMount");

    }
    componentDidUpdate ( ) {
        console.log("componentDidUpdate");
        
    }
    componentWillUnmount ( ) {
        console.log("componentWillUnmount");
        
    }
}

class App extends React.Component{
    constructor ( ) {
        super();
        console.log("Constructor")
    }
    render ( ) {
        console.log("Render");
        return(
            <div className="Box">
             <h1>Apple</h1>
             <p>Price: 50</p>
         </div>
        );
    }

    componentDidMount ( ) {
        console.log("componentDidMount");

    }
    componentDidUpdate ( ) {
        console.log("componentDidUpdate");
        
    }
    componentWillUnmount ( ) {
        console.log("componentWillUnmount");
        
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));