import Layer from "./Layer"
class Drawer{
    static drawText(x, y, length, angle, text) {
        var canvas = document.getElementById("myCanvas");
        var Xoffset = 0;
        var Yoffset = 0;
        if((Math.cos(angle)*length)>0)Xoffset+=15;
        else Xoffset= -35
        if((-(Math.sin(angle)*length))>0)Yoffset+=10;
        else Yoffset= -18;
        if(text == "pi")console.log(Xoffset);
        var ctx = canvas.getContext("2d");
        ctx.font = "15px Arial";
        console.log("raggio2: ", length);
        ctx.fillText(text.replace("pi", "\u03C0"), x+(Math.cos(angle)*length)+Xoffset, y-(Math.sin(angle)*length)+Yoffset);
    }
    static drawArc(x, y, r, startAngle, endAngle){
        var c = document.getElementById("myCanvas");
        var context = c.getContext("2d");
        context.beginPath();
        context.arc(x, y, r, startAngle, endAngle, true);
        context.stroke();
    }
    static drawColoredArc(x, y, r, startAngle, endAngle, color){
        var c = document.getElementById("myCanvas");
        var context = c.getContext("2d");
        context.beginPath();
        context.arc(x, y, r, startAngle, endAngle, true);
        context.lineWidth =6;
        context.strokeStyle = color;
        context.stroke();
    }
    static drawLayer(x, y, r, l){
        this.drawCartersianPlane(
            document.getElementById("myCanvas").width/2,
            document.getElementById("myCanvas").height/2,
            r*2+50,
        )
        console.log("raggio1: ", r);
        var list = l.getList();
        var dict = l.getDict();
        for(var i = 0; i < (list.length-1); i++){
            if(dict[list[i]] === true){
                this.drawColoredArc(x, y, r, -list[i], -list[i+1], "#FF0000");
                //console.log('drawing red arc between '+ (-list[i]) + ' and'  + (-list[i+1]));
            }
            else{
                this.drawColoredArc(x, y, r, -list[i], -list[i+1], "#0000FF");
                //console.log('drawing blue arc between '+ (-list[i]) + ' and'  + (-list[i+1]));
            }
        }
    }
    static drawResultLayer(x, y, r, l, importantAngles){
        this.drawLayer(x, y, r, l);
        for(var i = 0; i < importantAngles.length;i++){
            console.log("sto disegnando: ", l.getAngleFromString(importantAngles[i]), importantAngles[i])
            this.drawText(x, y, r,  importantAngles[i], l.getAngleFromString(importantAngles[i]));
        }
    }
    static drawRect(x0, y0, x1, y1){
        var c = document.getElementById("myCanvas");
        var context = c.getContext("2d");
        context.beginPath();
        context.lineWidth = 4;
        context.strokeStyle = "black";
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.stroke();
    }
    static drawCartersianPlane(x, y, size){
        this.drawRect(x, y-size/2, x, y+size/2);
        this.drawRect(x+size/2, y, x-size/2, y);
    }
    static drawInequity(x, y, r, layer){
        this.drawLayer(x, y, r, layer);
        for(var i = 0;i < layer.getImportantAngles().length;i++){
            console.log("sono arrivato yeh!");
            console.log(layer.getImportantAngles()[i], layer.getStringFromAngle(layer.getImportantAngles()[i]));
            console.log("pippo: ", layer.getImportantAngles()[i], layer.getStringFromAngle(layer.getImportantAngles()[i]));
            this.drawText(x, y, r,  layer.getImportantAngles()[i], layer.getStringFromAngle(layer.getImportantAngles()[i]));
            this.drawRect(
                x, y, 
                x+Math.cos(layer.getImportantAngles()[i])*r,
                y-Math.sin(layer.getImportantAngles()[i])*r,
            )
        }
    }
}
export default Drawer;