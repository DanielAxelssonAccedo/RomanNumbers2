
module.exports = {

ArabicToRoman:function(n) {

    if(Number.isInteger(n) != true) {
        
        throw new TypeError("n is not an integer")
    }
    if(n >= 4000)
    {
        throw new TypeError("Orginal RomanNumbers was never above 4000")
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
                temp = "I"
                result = temp.concat(result); break;
            }
            else if (i === 1) {
                temp = "X"
                result = temp.concat(result); break;
            }
            else if (i === 2) {
                temp = "C"
                result = temp.concat(result); break;
            }
            else if (i === 3) {
                temp = "M"
                result = temp.concat(result); break;
            }

            case '2': 
            if(i === 0) {
                temp = "II"
                result = temp.concat(result); break;
            }
            else if(i === 1) {
                temp = "XX"
                result = temp.concat(result); break;
            }
            else if (i === 2) {
                temp = "CC"
                result = temp.concat(result); break;
            }
            else if (i === 3) {
                temp = "MM"
                result = temp.concat(result); break;
            }

            case '3':
            if(i === 0) {
                temp = "III"
                result = temp.concat(result); break;
            }
            else if(i === 1) {
                temp = "XXX"
                result = temp.concat(result); break;
            }
            else if (i === 2) {
                temp = "CCC"
                result = temp.concat(result); break;
            }
            else if (i === 3) {
                temp = "MMM"
                result = temp.concat(result); break;
            }

            case '4':
            if(i === 0) {
                temp = "IV"
                result = temp.concat(result); break;
            }
            else if(i === 1) {
                temp = "XL"
                result = temp.concat(result); break;
            }
            else if (i === 2) {
                temp = "CD"
                result = temp.concat(result); break;
            }

            case '5':
            if(i === 0) {
                temp = "V"
                result = temp.concat(result); break;
            }
            else if(i === 1) {
                temp = "L"
                result = temp.concat(result); break;
            }
            else if (i === 2) {
                temp = "D"
                result = temp.concat(result); break;
            }

            case '6':
            if(i === 0) {
                temp = "VI"
                result = temp.concat(result); break;
            }
            else if(i === 1) {
                temp = "LX"
                result = temp.concat(result); break;
            }
            else if (i === 2) {
                temp = "DC"
                result = temp.concat(result); break;
            }

            case '7': 
            if(i === 0) {
                temp = "VII"
                result = temp.concat(result); break;
            }
            else if(i === 1) {
                temp = "LXX"
                result = temp.concat(result); break;
            }
            else if (i === 2) {
                temp = "DCC"
                result = temp.concat(result); break;
            }

            case '8': 
            if(i === 0) {
                temp = "VIII"
                result = temp.concat(result); break;
            }
            else if(i === 1) {
                temp = "LXXX"
                result = temp.concat(result); break;
            }
            else if (i === 2) {
                temp = "DCCC"
                result = temp.concat(result); break;
            }

            case '9':
            if(i === 0) {
                temp = "IX"
                result = temp.concat(result); break;
            }
            else if(i === 1) {
                temp = "XC"
                result = temp.concat(result); break;
            } 
            else if (i === 2) {
                temp = "CM"
                result = temp.concat(result); break;
            }                      

        }

    } 
 
    return result
}

}


