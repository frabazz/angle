import React, { Component } from 'react'
import './css/expression_box.css'
import Fraction from "./Fraction"
import Layer from "../utilities/Layer";
import Drawer from "../utilities/Drawer"
import Expression from "../utilities/Expressions"
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
            type : true,
        }
        this.handlePress = this.handlePress.bind(this);
    }
    submitExp(exp) {
        var l1 = exp.getLayer();
        var left = exp.getLeft();
        var right = exp.getRight();
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
            var expText = document.getElementById("inputFormula").value;
            var exp = new Expression(expText);
            var left = exp.getLeft(exp);
            var right = exp.getRight(exp);
            this.submitExp(exp);
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
                type : exp.getType(),
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
            if(this.state.type == true){
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
                );
            }
            else{
                return(
                    <div className="box_wrapper">
                        x &#60; 
                        <Fraction 
                        top={this.state.leftTop} 
                        bottom={this.state.leftBottom} 
                        isFraction={this.state.isFractionLeft}
                        noF={this.state.noFleft}
                        />
                        &nbsp; &#8744;  x  &#62; &nbsp;
                        <Fraction 
                        top={this.state.rightTop} 
                        bottom={this.state.rightBottom} 
                        isFraction={this.state.isFractionRight}
                        noF={this.state.noFright}
                        />
                    </div>
                );
            }
        }
    }
}
export default ExpressionBox;