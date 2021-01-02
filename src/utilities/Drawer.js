
import Layer from "./Layer"
class Drawer{
    static drawText(x, y, length, angle, text) {
        var canvas = document.getElementById("myCanvas");
        var Xoffset = 0;
        var Yoffset = 0;
        if((Math.cos(angle)*length)>0)Xoffset+=15;
        else Xoffset= -20
        if((-(Math.sin(angle)*length))>0)Yoffset+=10;
        else Yoffset= -10;
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
}
export default Drawer;