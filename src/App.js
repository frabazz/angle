import './App.css';
import React, { Component } from 'react';
import Canvas from './Components/Canvas'
import Fraction from './Components/Fraction'
import ExpressionBox from './Components/ExpressionBox'
import LeftContainer from './Components/LeftContainer'
import RightContainer from './Components/RightContainer'
import "./Components/css/container.css"
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      components: <div id="textResult">TEST</div>
    }
    this.writeResult = this.writeResult.bind(this);
  }
  writeResult(F1, F2){

    this.setState({
      components: (
        <div>
          <Fraction 
          top={F1[0]} 
          bottom={F1[1]} 
          isFraction={F1[2]}
          noF={F1[3].replace("pi", "\u03C0")}
          />
          &#60; x &#60;
          <Fraction 
          top={F2[0]} 
          bottom={F2[1]} 
          isFraction={F2[2]}
          noF={F2[3].replace("pi", "\u03C0")}
          />
        </div>
      )
    })
  }
  render(){
    return (
      <div className="container">
        <LeftContainer>
          <Canvas percent={70}/>
        </LeftContainer>      
        <RightContainer resultHandler = {this.writeResult.bind(this)}>
          <ExpressionBox/>
        </RightContainer>
      </div>);
    }
}

export default App;
