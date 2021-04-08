// React Components
const { ButtonGroup, Button } = window['MaterialUI'];
  
// Funtional component
// props - {name: 'Apple', price: '100', children:' '}
const Cart = ( props ) => {
    return (
        <div className="Box, classes.root">
            <h1>{props.name}</h1>
            <p>Price: {props.price}</p>
            <p>{props.children}</p>
        </div>
    );
}

// Class component
class Cart1 extends React.Component {

    render(){
        // console.log(this.props);
        return (
            
            <div className="Box">
                <h1>{this.props.name}</h1>
                <p>Price: {this.props.price}</p>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button>A</Button>
                    <Button>b</Button>
                    <Button>c</Button>
                </ButtonGroup>
            </div>
        );
    }
}

// let app = (
//     <div>
//         <Cart1 name="Apple" price="100" />
//         <Cart1 name="Orange" price="60"/> 
//         <Cart name="Apple" price="100">
//             <Cart name="Orange" price="60"/>
//         </Cart>
        
//     </div>
// );

let app = (
    <div>
        <Cart1 name="Apple" price="100" />
        <Cart1 name="Mango" price="60" />
        <Cart1 name="Melon" price="80" />
    </div>
);
// ReactDOM.render( <Cart />, document.getElementById('root'));
// ReactDOM.render( <Cart1 />, document.getElementById('root'));
ReactDOM.render( app, document.getElementById('root'));