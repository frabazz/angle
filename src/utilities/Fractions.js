class Fractions{
    static isFraction(fraction){
        if(fraction.indexOf("/") == -1){
            return false;
        }
        else{
            return true;
        }
    }
    static getTop(fraction){
        var start = 0;
        var end = fraction.indexOf("/");
        return fraction.substring(start, end).replace("pi", "\u03C0");
    }
    static getBottom(fraction){
        var start = fraction.indexOf("/")+1;
        var end = fraction.length;
        return fraction.substring(start, end).replace("pi", "\u03C0");
    }
}
export default Fractions;