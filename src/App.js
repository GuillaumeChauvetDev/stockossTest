import React , {Component} from 'react';
import './App.css';
import StockossTest from './StockossTest.js';

const Square = ({id, object}) => {
  return(
    <div className="square">
      <div>{id}</div>
      {object ? "L'objet est ici" : null}
    </div>
  );
}

class Map extends Component {
  renderSquare(i) {
    let object = false;
    if(this.props.item === i) {
      object = true;
    }
    return(
      <Square
        id={i}
        object={object}  
      />
    ); 
  }

  render() {
    return(
      <div className="map">
        <div className="row">
          {this.renderSquare("a0")}
          {this.renderSquare("a1")}
          {this.renderSquare("a2")}
          {this.renderSquare("a3")}
          {this.renderSquare("a4")}
          {this.renderSquare("a5")}
        </div>
        <div className="row">
          {this.renderSquare("b0")}
          {this.renderSquare("b1")}
          {this.renderSquare("b2")}
          {this.renderSquare("b3")}
          {this.renderSquare("b4")}
          {this.renderSquare("b5")}
        </div>
        <div className="row">
          {this.renderSquare("c0")}
          {this.renderSquare("c1")}
          {this.renderSquare("c2")}
          {this.renderSquare("c3")}
          {this.renderSquare("c4")}
          {this.renderSquare("c5")}
        </div>
        <div className="row">
          {this.renderSquare("d0")}
          {this.renderSquare("d1")}
          {this.renderSquare("d2")}
          {this.renderSquare("d3")}
          {this.renderSquare("d4")}
          {this.renderSquare("d5")}
        </div>
        <div className="row">
          {this.renderSquare("e0")}
          {this.renderSquare("e1")}
          {this.renderSquare("e2")}
          {this.renderSquare("e3")}
          {this.renderSquare("e4")}
          {this.renderSquare("e5")}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    refItem: '',
    posItem: ''
  }

  handleChange = event => {
    const refItem = event.target.value;
    if(StockossTest(refItem).position) {
      this.setState({posItem: StockossTest(refItem).position})
    } else {
      this.setState({posItem: ''});
    }
    this.setState({refItem})
  }

  render() {
    return(
      <div className="App">
        <div className="fakeForm">Référence de l'objet: <input type="text" name="refItem" onChange={this.handleChange} /></div>
        <Map item={this.state.posItem} />
      </div>
    )
  }
}

export default App;