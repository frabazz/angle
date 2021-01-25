import React, { Component } from 'react'
import "./css/container.css"
import ExpressionBox from "./ExpressionBox"
import Drawer from "../utilities/Drawer"
import ReactDOMServer from 'react-dom/server'
import Layer from "../utilities/Layer"
import Trig from "../utilities/Trig"
export class RightContainer extends Component {
    constructor(props) {
        super(props);
        this.layers = [];
        this.state = {
            range : 75,
            componentList : [
                <ExpressionBox preExp = {[]} classId = {"box_wrapper"} range = {75} updateHandler={this.updateHandler.bind(this)}/>
            ],
            importantAngles: [],
        }
        this.updateHandler = this.updateHandler.bind(this);
    }
    updateHandler(layer, left, right, clazzId, postExp, noLayer){

        this.setState({
            range : this.state.range+25,
            componentList : [...this.state.componentList, <ExpressionBox preExp = {postExp} classId = {clazzId} range = {this.state.range+50} updateHandler={this.updateHandler.bind(this)}/>],
            importantAngles : [...this.state.importantAngles, left, right]
        });
        if(!noLayer)this.layers.push(layer);
        
    }
    render() {
        return (
            <div className="right__container">
                {this.state.componentList}
                <button className="confirm__button" onClick={
                    () => {
                        if(this.layers.length != 0){
                            console.log(this.layers);
                            var l = Layer.multiplyLayers(this.layers);
                            console.log("important angles: ", this.state.importantAngles);
                            var canvas = document.getElementById('myCanvas');
                            var width = canvas.width;
                            var height = canvas.height;
                            Drawer.drawLayer(width/2, height/2, this.state.range+100, l);
                            for(var i = 0;i < this.state.importantAngles.length;i++){
                                Drawer.drawText(width/2, height/2, this.state.range+100, l.getAngleFromString(this.state.importantAngles[i]), this.state.importantAngles[i]);
                            }
                        }
                        else{
                            window.alert("dovresti inserire delle disequazioni prima, che dici?")
                        }

                    }
                }>Calcola</button>
                <button className="confirm__button2" onClick={
                    () => {
                        window.location.reload();
                    }
                }>Pulisci</button>
                <button className="confirm__button2" onClick={
                    () => {
                        var c=document.getElementById("myCanvas");
                        var d=c.toDataURL("image/png");
                        var w=window.open('about:blank','image from canvas');
                        w.document.write("<img src='"+d+"' alt='from canvas'/>");
                    }
                }>Salva</button>
            </div>
        )
    }
}

export default RightContainer
