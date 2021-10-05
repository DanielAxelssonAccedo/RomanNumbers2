
module.exports = {

ArabicToRoman:function(n) {

    if(Number.isInteger(n) != true)
    {
        throw new TypeError("n is not an integer")

    }

    ArabicNummer = n.toString()
    ArabicNummer = ArabicNummer.split("")
    ArabicNummer = ArabicNummer.reverse()
    ArabicLength = ArabicNummer.length
    result = ""

    for(i = 0; i < ArabicLength; i++){
        
        x = ArabicNummer[i]

        switch(x){
            case '0': break;
            case '1': 
            if(i === 0 ) {
                tempresult = result
                result = tempresult.concat("I"); break;
            }
            else if (i === 1) {
                result = result.concat("X"); break;
            }
            case '2': 
            if(i === 0) {
                result = result.concat("II"); break;
            }
            else if(i === 1) {
                result = result.concat("XX"); break;
            }

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


