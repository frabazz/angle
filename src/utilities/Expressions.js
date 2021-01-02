class Expressions{
    static getLeft(exp){
        exp = exp.replaceAll(" ", "");
        exp = exp.replaceAll("<", "");
        exp = exp.replace("x", " ");
        return exp.substr(0, exp.indexOf(" "));
    }
    static getRight(exp){
        exp = exp.replaceAll(" ", "");
        exp = exp.replaceAll("<", "");
        exp = exp.replace("x", " ");
        return exp.substr(exp.indexOf(" ")+1, exp.length-1);
    }
}
export default Expressions;