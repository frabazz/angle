import React, { Component } from 'react'
import './css/expression_box.css'
import Fraction from "./Fraction"
import Layer from "../utilities/Layer";
import Drawer from "../utilities/Drawer"
import Expressions from "../utilities/Expressions"
import Fractions from "../utilities/Fractions"
var Cookies = require("js-cookie")



export class ExpressionBox extends Component {
    //&#960;
    constructor(props){
        super(props);
        this.state = {
            leftTop : "",
            leftBottom : "",
            rightTop : "",
            rightBottom : "",
            active: false,
        }
        this.handlePress = this.handlePress.bind(this);
    }
    submitExp(left, right) {
        var l1 = new Layer();
        var l = l1.getAngleFromString(left.replace(" ", ""));
        var r = l1.getAngleFromString(right.replace(" ", ""));
        console.log("exp: ", left , "value: ", l);
        console.log("exp: ", right , "value: ", r);
        l1.setTrueFor(l, r);
        var canvas = document.getElementById('myCanvas');
        var width = canvas.width;
        var height = canvas.height;
        Drawer.drawLayer(width/2, height/2, this.props.range, l1);
        this.props.updateHandler(
            l1,
            left, 
            right,
        );
    }
    handlePress(e){
        console.log(typeof this.render());
        if(e.key == "Enter"){
            console.log("hai cliccato enter!");
            var exp = document.getElementById("inputFormula").value;
            var left = Expressions.getLeft(exp);
            var right = Expressions.getRight(exp);
            this.submitExp(left, right);
            this.setState({
                noFright: right.replace("pi", "\u03C0"),
                noFleft: left.replace("pi", "\u03C0"),
                isFractionLeft : Fractions.isFraction(left),
                isFractionRight : Fractions.isFraction(right),
                leftTop : Fractions.getTop(left),
                rightTop : Fractions.getTop(right),
                leftBottom :Fractions.getBottom(left),
                rightBottom : Fractions.getBottom(right),
                active: true,
            });
        }
    }
    render() {
        if(!this.state.active){
            return (
            <div className="box_wrapper">
                <input type="text" className="input_box" id="inputFormula" onKeyDown={this.handlePress}></input>
                
            </div>
            )
        }  
        else{
            return(
                <div className="box_wrapper">
                    <Fraction 
                    top={this.state.leftTop} 
                    bottom={this.state.leftBottom} 
                    isFraction={this.state.isFractionLeft}
                    noF={this.state.noFleft}
                    />
                    &#60; x &#60;
                    <Fraction 
                    top={this.state.rightTop} 
                    bottom={this.state.rightBottom} 
                    isFraction={this.state.isFractionRight}
                    noF={this.state.noFright}
                    />
                </div>
            )
        }
    }
}
export default ExpressionBox;