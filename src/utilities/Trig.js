import Layer from './Layer'
class Trig{
    static getAngles(){
        var pi = Math.PI;
        return(
            [
                0,
                pi/12, 
                pi/10,
                pi/8, 
                pi/6,
                pi/5,
                pi/4,
                (3/10)*pi, 
                pi/3,
                (3/8)*pi,
                (2/5)*pi,
                (5/12)*pi,
                pi/2,
                (7/12)*pi,
                (3/5)*pi,
                (5/8)*pi,
                (2/3)*pi,
                (7/10)*pi,
                (3/4)*pi,
                (4/5)*pi,
                (5/6)*pi,
                (7/8)*pi,
                (9/10)*pi,
                (11/12)*pi,
                pi,
                (13/12)*pi,
                (11/10)*pi,
                (9/8)*pi,
                (7/6)*pi,
                (6/5)*pi,
                (5/4)*pi,
                (13/10)*pi,
                (4/3)*pi,
                (11/8)*pi,
                (7/5)*pi,
                (17/12)*pi,
                (3/2)*pi,
                (19/12)*pi,
                (8/5)*pi,
                (13/8)*pi,
                (5/3)*pi,
                (17/10)*pi,
                (7/4)*pi,
                (9/5)*pi,
                (11/6)*pi,
                (15/8)*pi,
                (19/10)*pi,
                (23/12)*pi,
                2*pi,
            ]
        )
    }
    static precise(x) {
        if(x.toString().indexOf("e")!=-1)return 0;
        return parseFloat(Number.parseFloat(x).toPrecision(4));
    }  
    static getPreciseAngle(angle){
        var angles = this.getAngles();
        for(var i = 0;i < angles.length;i++){
            if(this.precise(angles[i]) == this.precise(angle)){
                return angles[i];
            }
        }
    }
    static getFunStringValues(){
        return(
            [
                "0", "1", "0", "inf",
                "(s6-s2)/4", "(s6+s2)/4", "2-s3", "2+s3",
                "(s5-1)/4", "s(10+2s5)/5", "s(25-10s5)/5", "s(5+2s5)",
                "s(2-s2)/2", "s(s+s2)/2", "s2-1", "s2+1",
                "1/2", "s3/2", "s3/3", "s3",
                "s(s10-2s5)/4", "(s5+1)/4", "s(5-2s5)", "s(25+10s5)/5", 
                "s2/2", "s2/2", "1", "1", 
                "(s5+1)/4", "s(10-2s5)/4", "s(25+10s5)/5", "s(5-2s5)", 
                "s3/2", "1/2", "s3", "s3/3", 
                "s(2+s2)/2", "s(2-s2)/2", "s2+1", "s2-1", 
                "s(10+2s5)/4", "(s5-1)/4", "s(5+2s5)", "s(25-10s5)/5", 
                "(s6+s2)/4", "(s6-s2)/4", "2+s3", "2-s3", 
                "1", "0", "+inf", "0",
                "(s6+s2)/4" , "(s2-s6)/4", "-2-s3", "s3-2", 
                "s(10+2s5)/4", "(1-s5)/4", "-s(5+2s5)", "-s(25-10s5)/5",
                "s(2+s2)/2", "-s(2-s2)/2", "-1-s2", "1-s2",
                "s3/2", "-1/2", "-s3", "-s3/3",
                "(s5+1)/4", "-s(10-2s5)/4", "-s(25+10s5)/5", "-s(5-2s5)",
                "s2/2", "-s2/2", "-1", "-1",
                "s(10-2s5)/4", "-(s5+1)/4", "-s(5-2s5)", "-s(25+10s5)/5",
                "1/2", "-s3/2", "-s3/3", "-s3",
                "s(2-s2)/2", "-s(2+s2)/2", "1-s2", "-s2-1",
                "(s5-1)/4", "-s(10+2s5)/4", "-s(25-10s5)/5", "-s(5+2s5)",
                "(s6-s2)/4", "-(s6+s2)/4", "s3-2", "-s3-2",
                "0", "-1", "0", "+inf", 
                "(s2-s6)/4", "-(s6+s2)/4", "2-s3", "2+s3",
                "(1-s5)/4", "-s(10+2s5)/4", "s(25-10s5)/5", "s(5+2s5)",
                "-s(2-s2)/2", "-s(2+s2)/2", "s2-1", "s2+1",
                "-1/2", "-s3/2", "s3/3", "s3/3", "s3",
                "-s(10-2s5)/4", "-(s5+1)/4", "s(5-2s5)", "s(25+10s5)/5",
                "-s2/2", "-s2/2", "1", "1",
                "-(s5+1)/4", "-s(10-2s5)/5", "s(25+10s5)/5", "s(5-2s5)",
                "-s3/2", "-1/2", "s3", "s3/3",
                "-s(2+s2)/2", "-s(2-s2)/2", "s2+1", "s2-1",
                "-s(10+2s5)/4", "(1-s5)/4", "s(5+2s5)", "s(25-10s5)/5",
                "-(s6+s2)/4", "(s2-s6)/4", "2+s3", "2-s3", 
                "-1", "0", "+inf", "0",
                "-(s6+s2)/4", "(s6-s2)/4", "-2-s3", "s3-2",
                "-s(10+2s5)/4", "(s5-1)/4", "-s(5+2s5)", "-s(25-10s5)/5",
                "-s(2+s2)/2", "s(2-s2)/2", "-1-s2", "1-s2",
                "-s3/2", "1/2", "-s3", "-s3/3",
                "-(s5+1)/4", "s(10-2s5)/4", "-s(25+10s5)/5", "-s(5-2s5)",
                "-s2/2", "s2/2", "-1", "-1", "-1",
                "-s(10-2s5)/4", "(s5+1)/4", "-s(5-2s5)", "-s(25+10s5)/5",
                "-1/2", "s3/2", "-s3/3", "-s3",
                "-s(2-s2)/2", "s(2+s2)/2", "1-s2", "-1-s2",
                "(1-s5)/4", "s(10+2s5)/4", "-s(25-10s5)/5", "-s(5+2s5)",
                "(s2-s6)/4", "(s2+s6)/4", "s3-2", "-2-s3",
                "0", "1", "0", "inf",
            ]
        )
    }
    static checkCondition(a, sign, b){
        if(sign == "<"){
            if(a<=b)return true;
            else return false;
        }
        else if(sign == ">"){
            if(a>=b)return true;
            else return false;
        }
        else{
            console.log("si proprio n figghisucaminchi");
        }
    }
    static calcFun(fun, value){
        if(fun == "cos")return Math.cos(value);
        else if(fun == "sin")return Math.sin(value);
        else if(fun == "tan")return Math.tan(value);
        else if(fun == "cotan")return 1/Math.tan(value);
        else{
            console.log("bastaddu!");
        } 
    }
    static calcArcFun(fun, value){
        if(fun == "cos")return this.getAngleFromCos(value);
        else if(fun == "sin")return this.getAngleFromSin(value);
        else if(fun == "tan")return this.getAngleFromTan(value);
        else if(fun == "cotan")return this.getAngleFromCotan(value);
    }
    static getTwinAngle(trigFun, angle){
        if(trigFun == "cos"){
            return Math.abs(2*Math.PI-angle);
        }
        else if(trigFun = "sin"){
            return Math.abs(Math.PI-angle);
        }
        else if(trigFun == "tan"){
            var angleVals = this.getAngles();
            for(var i = 0; i < angleVals.length;i++){
                if(this.precise(Math.tan(angleVals[i])) == this.precise(Math.tan(angleVals[i])) && angleVals[i] != angle){
                    return angleVals[i];
                }
            }
        }
        else if(trigFun == "cotan"){
            var angleVals = this.getAngles();
            for(var i = 0; i < angleVals.length;i++){
                if(this.precise(1/Math.tan(angleVals[i])) == this.precise(1/Math.tan(angleVals[i])) && angleVals[i] != angle){
                    return angleVals[i];
                }
            }
        }
    }
    static getLayer(trigFun, sign, stringNumber){
        var convNumber = 0;
        var funStringVals = this.getFunStringValues();
        var funVals = this.getFunValues();
        if(trigFun == "sin" || trigFun == "cos"){
            var impAngles = [];
            var extern = false;
            for(var i = 0;i < funStringVals.length;i++){
                if(stringNumber == funStringVals[i]){
                    convNumber = funVals[i];
                    if(this.checkCondition(
                        this.precise(this.calcFun(trigFun, funVals[i])),
                        sign,
                        convNumber, 
                    ))extern = true;
                    else extern = false;
                    break;
                }
            }
            var firstAngle = this.calcArcFun(trigFun, convNumber);
            var secondAngle = this.getTwinAngle(trigFun, firstAngle);
            console.log(firstAngle, secondAngle);
            if(stringNumber == "0")extern = !extern;
            if(trigFun == "sin")extern = !extern;
            impAngles.push(this.getPreciseAngle(firstAngle), this.getPreciseAngle(secondAngle));
            var l = new Layer();
            impAngles.sort();
            l.setImportantAngles(impAngles);
            if(extern)l.setTrueFor(...impAngles);
            else l.setTrueForExtern(...impAngles);
            return l;
        }
        else{
            for(var i = 0; i < funVals.length; i++){
                if(stringNumber == funStringVals[i]){
                    convNumber = funVals[i];
                    console.log("convNumber: ", convNumber);
                    break;
                }
            }
            var angleVals = this.getAngles();
            var newDict = {};
            var impAngles = [];
            for(var i = 1;i < angleVals.length;i++){
                if(this.checkCondition(
                    this.calcFun(trigFun, angleVals[i]),
                    sign,
                    convNumber
                ))newDict[angleVals[i-1]]= true;
                else newDict[angleVals[i-1]] = false;
            }
            console.log(newDict);
            for(var i = 0;i < angleVals.length-1;i++){
                if(newDict[angleVals[i]] == true && newDict[angleVals[i+1]] == false){
                    impAngles.push(angleVals[i+1]);
                }
                if(newDict[angleVals[i]] == false && newDict[angleVals[i+1]] == true){
                    impAngles.push(angleVals[i+1]);
                }
            }
            impAngles.sort();
            console.log(impAngles);
            var l = new Layer();
            l.setImportantAngles(impAngles);
            l.setDict(newDict);
            return l;
        }
    }
    static getFunValues(){
        const s = n => Math.sqrt(n);
        let s5 = s(5);
        let s6 = s(6);
        let s3 = s(3);
        let s2 = s(2);
        let ss = s(10);
        let inf = "inf";
        return(
            [
                0, 1, 0, inf,
                (s6-s2)/4, (s6+s2)/4, 2-s3, 2+s3,
                (s5-1)/4, s(10+2*s5)/4, s(25-10*s5)/5, s(5+2*s5),
                s(2-s2)/2, s(2+s2)/2, s2-1, s2+1,
                1/2, s3/2, s3/3, s3,
                s(10-2*s5)/4, (s5+1)/4, s(5-2*s5), s(25+10*s5)/5, 
                s2/2, s2/2, 1, 1, 
                (s5+1)/4, s(10-2*s5)/4, s(25+10*s5)/5, s(5-2*s5), 
                s3/2, 1/2, s3, s3/3, 
                s(2+s2)/2, s(2-s2)/2, s2+1, s2-1, 
                s(10+2*s5)/4, (s5-1)/4, s(5+2*s5), s(25-10*s5)/5, 
                (s6+s2)/4, (s6-s2)/4, 2+s3, 2-s3, 
                1, 0, +inf, 0,
                (s6+s2)/4 , (s2-s6)/4, -2-s3, s3-2, 
                s(10+2*s5)/4, (1-s5)/4, -s(5+2*s5), -s(25-10*s5)/5,
                s(2+s2)/2, -s(2-s2)/2, -1-s2, 1-s2,
                s3/2, -1/2, -s3, -s3/3,
                (s5+1)/4, -s(10-2*s5)/4, -s(25+10*s5)/5, -s(5-2*s5),
                s2/2, -s2/2, -1, -1,
                s(10-2*s5)/4, -(s5+1)/4, -s(5-2*s5), -s(25+10*s5)/5,
                1/2, -s3/2, -s3/3, -s3,
                s(2-s2)/2, -s(2+s2)/2, 1-s2, -s2-1,
                (s5-1)/4, -s(10+2*s5)/4, -s(25-10*s5)/5, -s(5+2*s5),
                (s6-s2)/4, -(s6+s2)/4, s3-2, -s3-2,
                0, -1, 0, +inf, 
                (s2-s6)/4, -(s6+s2)/4, 2-s3, 2+s3,
                (1-s5)/4, -s(10+2*s5)/4, s(25-10*s5)/5, s(5+2*s5),
                -s(2-s2)/2, -s(2+s2)/2, s2-1, s2+1,
                -1/2, -s3/2, s3/3,  s3,
                -s(10-2*s5)/4, -(s5+1)/4, s(5-2*s5), s(25+10*s5)/5,
                -s2/2, -s2/2, 1, 1,
                -(s5+1)/4, -s(10-2*s5)/4, s(25+10*s5)/5, s(5-2*s5),
                -s3/2, -1/2, s3, s3/3,
                -s(2+s2)/2, -s(2-s2)/2, s2+1, s2-1,
                -s(10+2*s5)/4, (1-s5)/4, s(5+2*s5), s(25-10*s5)/5,
                -(s6+s2)/4, (s2-s6)/4, 2+s3, 2-s3, 
                -1, 0, +inf, 0,
                -(s6+s2)/4, (s6-s2)/4, -2-s3, s3-2,
                -s(10+2*s5)/4, (s5-1)/4, -s(5+2*s5), -s(25-10*s5)/5,
                -s(2+s2)/2, s(2-s2)/2, -1-s2, 1-s2,
                -s3/2, 1/2, -s3, -s3/3,
                -(s5+1)/4, s(10-2*s5)/4, -s(25+10*s5)/5, -s(5-2*s5),
                -s2/2, s2/2, -1, -1, 
                -s(10-2*s5)/4, (s5+1)/4, -s(5-2*s5), -s(25+10*s5)/5,
                -1/2, s3/2, -s3/3, -s3,
                -s(2-s2)/2, s(2+s2)/2, 1-s2, -1-s2,
                (1-s5)/4, s(10+2*s5)/4, -s(25-10*s5)/5, -s(5+2*s5),
                (s2-s6)/4, (s2+s6)/4, s3-2, -2-s3,
                0, 1, 0, inf,
            ]
        )
    }
    static checkEq(){
        var ang = this.getAngles();
        var vals = this.getFunValues();
        for(var i = 0;i < ang.length;i++){
            if(this.precise(vals[(i*4)-1+1]) != this.precise(Math.sin(ang[i])))console.log(i, "sin", this.precise(vals[(i*4)-1+1]) , this.precise(Math.sin(ang[i])));
            if(this.precise(vals[(i*4)-1+2]) != this.precise(Math.cos(ang[i])))console.log(i, "cos", this.precise(vals[(i*4)-1+2]) , this.precise(Math.cos(ang[i])));
            if(this.precise(vals[(i*4)-1+3]) != this.precise(Math.tan(ang[i])))console.log(i, "tan", this.precise(vals[(i*4)-1+3]) , this.precise(Math.tan(ang[i])));
            if(this.precise(vals[(i*4)-1+4]) != this.precise(1/Math.tan(ang[i])))console.log(i, "cotan", this.precise(vals[(i*4)-1+4]) , this.precise(1/Math.tan(ang[i])));
            console.log("cicle done!");
        }    
    }
    static getAngleFromCos(n){
        var angles = this.getAngles();
        for(var i = 0;i < angles.length;i++){
            if(this.precise(Math.acos(n)) == this.precise(angles[i]))return angles[i];
        }
    }
    static getAngleFromSin(n){
        var angles = this.getAngles();
        for(var i = 0;i < angles.length;i++){
            if(this.precise(Math.asin(n)) == this.precise(angles[i])){
                return angles[i];
            }
        }
    }
    static getAngleFromTan(n){
        var angles = this.getAngles();
        for(var i = 0;i < angles.length;i++){
            if(Math.atan(angles[i]) == n)return angles[i];
        }
    }
    static getAngleFromCotan(n){
        var angles = this.getAngles();
        for(var i = 0;i < angles.length;i++){
            if(Math.PI/2-Math.atan(angles[i]))return angles[i];
        }
    }
}
export default Trig;