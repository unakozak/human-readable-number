module.exports = function toReadable(number) {
    const strNum = number.toString();
    const length = strNum.length;
    let result = "";

    if (length === 3) {
        var hundreds = +strNum[0],
            tens = +strNum[1],
            units = +strNum[2];

        switch (hundreds) {
            case 1:
                result += "one hundred";
                break;
            case 2:
                result += "two hundred";
                break;
            case 3:
                result += "three hundred";
                break;
            case 4:
                result += "four hundred";
                break;
            case 5:
                result += "five hundred";
                break;
            case 6:
                result += "six hundred";
                break;
            case 7:
                result += "seven hundred";
                break;
            case 8:
                result += "eight hundred";
                break;
            case 9:
                result += "nine hundred";
                break;
        }


        if (tens !== 0 && tens !== 1) {
            result += " ";
            switch (tens) {
                case 2:
                    result += "twenty";
                    break;
                case 3:
                    result += "thirty";
                    break;
                case 4:
                    result += "forty";
                    break;
                case 5:
                    result += "fifty";
                    break;
                case 6:
                    result += "sixty";
                    break;
                case 7:
                    result += "seventy";
                    break;
                case 8:
                    result += "eighty";
                    break;
                case 9:
                    result += "ninety";
                    break;
            }
        }
        if (tens === 1) {
            result += " ";
            switch (units) {
                case 0:
                    result += "ten";
                    break;
                case 1:
                    result += "eleven";
                    break;
                case 2:
                    result += "twelve";
                    break;
                case 3:
                    result += "thirteen";
                    break;
                case 4:
                    result += "fourteen";
                    break;
                case 5:
                    result += "fifteen";
                    break;
                case 6:
                    result += "sixteen";
                    break;
                case 7:
                    result += "seventeen";
                    break;
                case 8:
                    result += "eighteen";
                    break;
                case 9:
                    result += "nineteen";
                    break;
            }
            return result;
        }

        if (units !== 0) {
            result += " ";
            switch (units) {
                case 1:
                    result += "one";
                    break;
                case 2:
                    result += "two";
                    break;
                case 3:
                    result += "three";
                    break;
                case 4:
                    result += "four";
                    break;
                case 5:
                    result += "five";
                    break;
                case 6:
                    result += "six";
                    break;
                case 7:
                    result += "seven";
                    break;
                case 8:
                    result += "eight";
                    break;
                case 9:
                    result += "nine";
                    break;
            }
        }
        return result;
    }
    if (length === 2) {
        let tens = +strNum[0],
            units = +strNum[1];

        if (tens !== 0 && tens !== 1) {
            switch (tens) {
                case 2:
                    result += "twenty";
                    break;
                case 3:
                    result += "thirty";
                    break;
                case 4:
                    result += "forty";
                    break;
                case 5:
                    result += "fifty";
                    break;
                case 6:
                    result += "sixty";
                    break;
                case 7:
                    result += "seventy";
                    break;
                case 8:
                    result += "eighty";
                    break;
                case 9:
                    result += "ninety";
                    break;
            }
        }
        if (tens === 1) {
            switch (units) {
                case 0:
                    result += "ten";
                    break;
                case 1:
                    result += "eleven";
                    break;
                case 2:
                    result += "twelve";
                    break;
                case 3:
                    result += "thirteen";
                    break;
                case 4:
                    result += "fourteen";
                    break;
                case 5:
                    result += "fifteen";
                    break;
                case 6:
                    result += "sixteen";
                    break;
                case 7:
                    result += "seventeen";
                    break;
                case 8:
                    result += "eighteen";
                    break;
                case 9:
                    result += "nineteen";
                    break;
            }
            return result;
        }

        if (units !== 0) {
            result += " ";
            switch (units) {
                case 1:
                    result += "one";
                    break;
                case 2:
                    result += "two";
                    break;
                case 3:
                    result += "three";
                    break;
                case 4:
                    result += "four";
                    break;
                case 5:
                    result += "five";
                    break;
                case 6:
                    result += "six";
                    break;
                case 7:
                    result += "seven";
                    break;
                case 8:
                    result += "eight";
                    break;
                case 9:
                    result += "nine";
                    break;
            }
        }
        return result;
    } else {
        let units = +strNum[0];

        switch (units) {
            case 0:
                result += "zero";
                break;
            case 1:
                result += "one";
                break;
            case 2:
                result += "two";
                break;
            case 3:
                result += "three";
                break;
            case 4:
                result += "four";
                break;
            case 5:
                result += "five";
                break;
            case 6:
                result += "six";
                break;
            case 7:
                result += "seven";
                break;
            case 8:
                result += "eight";
                break;
            case 9:
                result += "nine";
                break;
        }
        return result;
    }
};
