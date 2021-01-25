import React, { Component } from 'react'
import './css/expression_box.css'
import Fraction from "./Fraction"
import Layer from "../utilities/Layer";
import Drawer from "../utilities/Drawer"
import Expression from "../utilities/Expressions"
import Fractions from "../utilities/Fractions"
import Trig from "../utilities/Trig"


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
        var noLayer = true;
        var l1 = exp.getLayer();
        var left = exp.getLeft();
        var right = exp.getRight();
        var expClass = exp.getClassforComp();
        var postExp = [];
        if(exp.isSystem())postExp = [...this.props.preExp, exp];  
        var canvas = document.getElementById('myCanvas');
        var width = canvas.width;
        var height = canvas.height;
        if(this.props.preExp.length == 0 && !exp.isSystem()){
            noLayer = false;
            Drawer.drawLayer(width/2, height/2, this.props.range, l1);
        }
        else if(this.props.preExp.length != 0 && !exp.isSystem()){
            noLayer = false;
            var exps = [...this.props.preExp, exp];
            var layers = [];
            for(var i = 0;i < exps.length;i++){
                layers.push(exps[i].getLayer());
            }
            l1 = Layer.mergeLayers(layers);
            Drawer.drawLayer(width/2, height/2, this.props.range, l1);
        }
        this.props.updateHandler(
            l1,
            left, 
            right,
            expClass,
            postExp,
            noLayer
        );
    }
    handlePress(e){
        if(e.key == "Enter"){
            console.log("hai cliccato enter!");
            var expText = document.getElementById("inputFormula").value;
            if(expText.indexOf("cos") != -1 
            || expText.indexOf("sin") != -1
            || expText.indexOf("tan") != -1
            || expText.indexOf("cotan") != -1){
                var trigFun = "";
                var sign = ""
                if(expText.indexOf("cos") != -1 )trigFun = "cos";
                else if(expText.indexOf("sin") != -1 )trigFun = "sin";
                else if(expText.indexOf("tan") != -1 )trigFun = "tan";
                else if(expText.indexOf("cotan") != -1 )trigFun = "cotan";
                var sign = "";
                if(expText.indexOf(">") != -1 )sign = ">";
                else if(expText.indexOf(">=") != -1 )sign = ">=";
                else if(expText.indexOf("<") != -1 )sign = "<";
                else if(expText.indexOf("<=") != -1 )sign = "<=";
                var number = expText.replace(sign, "").replace("(x)", "").replace(" ", "").replace(trigFun, "");
                sign = sign.replace("=", "");
                var canvas = document.getElementById('myCanvas');
                var width = canvas.width;
                var height = canvas.height;
                if(trigFun != "tan" && trigFun != "cotan")Drawer.drawInequity(width/2, height/2, 200, Trig.getLayer(trigFun, sign, number));
                else{
                    document.getElementById("robbetto").innnerHTML = "Ancora tangente e cotangente non sono supportate :(";
                    var modal = document.getElementById("myModal");
                    modal.style.display = "block";
                }
            }
            else{
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
    }
    render() {
        if(!this.state.active){
            return (
            <div className={this.props.classId}>
                <input type="text" className="input_box" id="inputFormula" onKeyDown={this.handlePress}></input>
                
            </div>
            )
        }  
        else{
            if(this.state.type == true){
                return(
                    <div className={this.props.classId}>
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
                    <div className={this.props.classId}>
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