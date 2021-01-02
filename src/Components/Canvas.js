import React, {Component} from 'react'
import Drawer from '../utilities/Drawer'
import Layer from '../utilities/Layer'
import multiplyLayers from '../utilities/Layer';
class Canvas extends Component{
    constructor(props){
        super(props);
        var percentage = this.props.percent/100;
        this.state = {
            width: window.innerWidth*percentage,
            height: window.innerHeight*percentage
        }
    }
    render(){
        return(
        <div>
            <canvas id="myCanvas" width={this.state.width} height={this.state.height}></canvas>
        </div>
        );
    }
    multiplyLayers(Layers){
        var resultDict = {};
        var LayersDict = {};
        for(var i = 0;i < Layers[0].getList().length;i++){
            LayersDict[Layers[0].getList()[i]] = new Array();
        }
        for(var i = 0;i < Layers.length;i++){
            for(var j = 0;j < Layers[i].getList().length;j++){
                var actAngle = Layers[i].getList()[j];
                var sign = Layers[i].getDict()[actAngle];
                if(sign)sign = 1;
                else sign = -1; 
                LayersDict[actAngle].push(sign);
            }
        }
        for(var i = 0;i < Layers[0].getList().length;i++){
            var actAngle = Layers[0].getList()[i];
            var signList = LayersDict[actAngle];
            var result = 1;
            for(var j = 0;j < signList.length;j++){
                result = result * signList[j];
            }
            if(result == 1)result = true;
            else result = false;
            resultDict[actAngle] = result
        }
        var resultLayer = new Layer();
        resultLayer.setDict(resultDict);
        return resultLayer;
    }
    getLayerResult(layer){
        var result = [];
        var angleList = layer.getList();
        var angleDict = layer.getDict();
        for(var i = 0;i < angleList.length;i++){
            if(angleDict[angleList[i]]){
                var startTerm = angleList[i];
                startTerm = layer.getLatex(startTerm);
                i++;
                while(angleDict[angleList[i]] && i<angleList.length)i++;
                var endTerm = angleList[i];
                endTerm = layer.getLatex(endTerm);
                result.push((startTerm + " < x < " + endTerm));
            }
        }
        return result;
    }
    componentDidMount(){
        //Drawer.drawColoredArc(this.state.width/2, this.state.height/2, 100, 0, -Math.PI/2, 'blue');
        //Drawer.drawColoredArc(this.state.width/2, this.state.height/2, 100, -Math.PI/2, 0, 'red');
    }
}

export default Canvas
