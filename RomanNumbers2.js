
module.exports = {

ArabicToRoman:function(n) {

    if(Number.isInteger(n) != true)
    {
        throw new TypeError("n is not an integer")

    }

    ArabicNummer = n.toString()
    ArabicLength = ArabicNummer.length
    result = ""

    for(i = 0; i < ArabicLength; i++){
        
        x = ArabicNummer[i]

        switch(x){
            case '0': break;
            case '1': result = result.concat("I"); break;
            case '2': result = result.concat("II"); break;
            case '3': result = result.concat("III"); break;
            case '4': result = result.concat("IV"); break;
            case '5': result = result.concat("V"); break;
            case '6': result = result.concat("VI"); break;
            case '7': result = result.concat("VII"); break;
            case '8': result = result.concat("VIII"); break;
            case '9': result = result.concat("IX"); break;                       

        }

    } 
 
    return result
}

}



