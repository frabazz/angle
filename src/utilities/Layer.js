class Layer{
    constructor(){
        var pi = Math.PI;
        this.Angles = [
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
        ];
        this.StringAngles = [
            "0",
            "pi/12", 
            "pi/10",
            "pi/8", 
            "pi/6",
            "pi/5",
            "pi/4",
            "3pi/10", 
            "pi/3",
            "3pi/8",
            "2pi/5",
            "5pi/12",
            "pi/2",
            "7pi/12",
            "3pi/5",
            "5pi/8",
            "2pi/3",
            "7pi/10",
            "3pi/4",
            "4pi/5",
            "5pi/6",
            "7pi/8",
            "9pi/10",
            "11pi/12",
            "pi",
            "13pi/12",
            "11pi/10",
            "9pi/8",
            "7pi/6",
            "6pi/5",
            "5pi/4",
            "13pi/10",
            "4pi/3",
            "11pi/8",
            "7pi/5",
            "17/12",
            "3pi/2",
            "19pi/12",
            "8pi/5",
            "13pi/8",
            "5pi/3",
            "17pi/10",
            "7pi/4",
            "9pi/5",
            "11pi/6",
            "15pi/8",
            "19pi/10",
            "23pi/12",
            "2pi",
        ];
        this.StringDict = {};
        for(var i = 0;i < this.StringAngles.length;i++){
            this.StringDict[this.StringAngles[i]] = this.Angles[i]; 
        }
        this.AnglesDict = {};
        for(var i = 0;i < this.Angles.length;i++){
            this.AnglesDict[this.Angles[i]] = false;
        }
        
    }
    static multiplyLayers(Layers){
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
    static getLayerResult(layer){
        var result = [];
        var angleList = layer.getList();
        var angleDict = layer.getDict();
        console.log(angleDict);
        for(var i = 0;i < angleList.length;i++){
            if(angleDict[angleList[i]]){
                var j = 0;
                console.log("index: ", i);
                var startTerm = angleList[i];
                startTerm = layer.getLatexAngle(startTerm);
                i++;
                while(angleDict[angleList[i]] && i<angleList.length){
                    if(i == angleList.length-1 && angleDict[angleList[i]]){
                        for(var j = 0;j < angleList.length;j++){
                            if(!angleDict[angleList[j]])break;
                        }
                    }
                    i++;
                }
                var endTerm = 0;
                if(j == 0)endTerm = angleList[i];
                else endTerm = angleList[j];
                console.log(endTerm);
                endTerm = layer.getLatexAngle(endTerm);
                result.push((startTerm + " < x < " + endTerm));
                j = 0;
            }
        }
        return result;
    }
    static mergeLayers(Layers){
        var resultLayer = new Layer();
        var resultDict = resultLayer.getDict();
        for(var i = 0;i < Layers.length;i++){
            for(var j = 0;j < Layers[i].getList().length;j++){
                if(Layers[i].getDict()[Layers[i].getList()[j]]){
                    resultDict[Layers[i].getList()[j]] = true;
                }
            }
        }
        resultLayer.setDict(resultDict);
        return resultLayer;
    }
    getList(){
        return this.Angles;
    }
    getDict(){
        return this.AnglesDict;
    }
    getAngleFromString(string){
        return this.StringDict[string];
    }
    getStringFromAngle(angle){
        for(var i = 0;i < this.StringAngles.length;i++){
            if(this.StringDict[this.StringAngles[i]] == angle)return this.StringDict[this.StringAngles[i]];
        }
    }
    setDict(newDict){
        this.AnglesDict = newDict;
    }
    setTrueFor(a, b){
        //console.log(a);
        //console.log(b);
        if(!this.Angles.includes(a) || !this.Angles.includes(b)){
            console.log("errore, gli angoli non fanno parte del dataset, e il mio dataset è perfetto");
        }
        else if(a>b){
            console.log("errore, gli angoli devono essere in ordine crescente!");
        }
        else{
            for(var i = this.Angles.indexOf(a);i < this.Angles.indexOf(b);i++){
                this.AnglesDict[this.Angles[i]] = true;
            }
        }
    }
    setTrueForExtern(a, b){
        if(!this.Angles.includes(a) || !this.Angles.includes(b)){
            console.log("errore, gli angoli non fanno parte del dataset, e il mio dataset è perfetto");
        }
        else if(a>b){
            console.log("errore, gli angoli devono essere in ordine crescente!");
        }
        else{
            var i = this.Angles.indexOf(b);
            while(i != this.Angles.indexOf(a)){
                if(i == this.Angles.length - 1)i = 0;
                else{
                    this.AnglesDict[this.Angles[i]] = true;
                    i++;
                }
            }
        } 
    }

}
export default Layer;