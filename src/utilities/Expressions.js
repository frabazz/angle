import Layer from './Layer';
class Expression{
    constructor(exp){
        this.exp = exp;
        this.isFirstType = true;
        this.isSecondType = false;
    }
    getType(exp){
        var exp = this.exp;
        var count = 0;
        for(var i = 0;i < exp.length;i++){
            if(exp[i] == "<")count++;
        }
        if(count == 2)return this.isFirstType;
        else if(count == 1)return this.isSecondType;
        else console.log("noccapito"); //throw error

    }
    logTest(){
        console.log("exp: ", this.exp);
        console.log("left: ", this.getLeft(this.exp));
        console.log("right: ", this.getRight(this.exp));
    }
    getLeft(){
        var exp = this.exp;
        if(this.getType(exp) == this.isFirstType){
            exp = exp.replaceAll(" ", "");
            exp = exp.replaceAll("<", "");
            exp = exp.replace("x", " ");
            return exp.substr(0, exp.indexOf(" "));
        }
        else{
            exp = exp.replaceAll(" ", "");
            exp = exp.replaceAll("<", "");
            exp = exp.replaceAll(">", "");
            exp = exp.replaceAll("x", "");
            exp = exp.replaceAll("and", " ");
            return exp.substr(0, exp.indexOf(" "));
        }
        
    }
    getRight(){
        var exp = this.exp;
        if(this.getType(exp) == true){
            exp = exp.replaceAll(" ", "");
            exp = exp.replaceAll("<", "");
            exp = exp.replace("x", " ");
            return exp.substr(exp.indexOf(" ")+1, exp.length-1);
        }
        else{
            exp = exp.replaceAll(" ", "");
            exp = exp.replaceAll("<", "");
            exp = exp.replaceAll(">", "");
            exp = exp.replaceAll("x", "");
            exp = exp.replaceAll("and", " ");
            return exp.substr(exp.indexOf(" ")+1, exp.length-1);
        }
    }
    getLayer(){
        var layer = new Layer();
        if(this.getType() == this.isFirstType){
            layer.setTrueFor(
                layer.getAngleFromString(this.getLeft()),
                layer.getAngleFromString(this.getRight()),
            );
        }
        else{
            this.logTest();
            layer.setTrueForExtern(
                layer.getAngleFromString(this.getLeft()),
                layer.getAngleFromString(this.getRight()),
            );
        }
        return layer;
    }

}
export default Expression;