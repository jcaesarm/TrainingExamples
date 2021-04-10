// // React Components

// // Funtional component
// // props - {name: 'Apple', price: '100', children:' '}
// const Cart = ( props ) => {
//     return (
//         <div className="Box">
//             <h1>{props.name}</h1>
//             <p>Price: {props.price}</p>
//             <p>{props.children}</p>
//         </div>
//     );
// }

// // Class component
// class Cart1 extends React.Component {

//     render(){
//         // console.log(this.props);
//         return (
//             <div className="Box">
//                 <h1>{this.props.name}</h1>
//                 <p>Price: {this.props.price}</p>
//             </div>
//         );
//     }
// }

// // let app = (
// //     <div>
// //          <Cart1 name="Apple" price="100"/>
// //          <Cart1 name="Orange" price="60"/>
// //             <Cart name="Apple" price="100">
// //                         <Cart name="Orange" price="60"/>
// //                     </Cart>
         
// //     </div>
// // );

// let app = (
//     <div>
//         <Cart name="Apple" price="100" />
//         <Cart1 name="Orange" price="60"/> 
//     </div>
// );

// // ReactDOM.render( <Cart />, document.getElementById('root'));
// // ReactDOM.render( <Cart1 />, document.getElementById('root'));
// ReactDOM.render( app, document.getElementById('root'));

const Cart = ( props ) => {
    return (
        <div className="Box">
            <h1 onClick={() => props.clicked('function')}>{props.name}</h1>
            <p>Price: {props.price}</p>
        </div>
    );
}

// Class component
class Cart1 extends React.Component {

    render(){
        // console.log(this.props);
        return (
            <div className="Box">
                <h1 onClick={() =>this.props.clicked('class')}>{this.props.name}</h1>
                <p>Price: {this.props.price}</p>
            </div>
        );
    }
}

class App extends React.Component {

    someMethod( arg ){
        console.log('App Method called!', arg);
    }

    render() {
        return(
            <div className="App">
                <Cart name="Apple" price="100" clicked={this.someMethod}/>
                <Cart1 name="Orange" price="60" clicked={this.someMethod}/> 
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root'));