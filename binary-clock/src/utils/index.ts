export interface Binary {
  firstCol: Array<any>;
  secondCol: Array<any>;
}

class Util {
    static convertToBinaryColumns = (digit: number) : Binary => {
       let digits = [...digit.toString()];
       let firstDigit; 
       let secondDigit;
       let binaryFirstColumn;
       let binarySecondColumn;
       if(digits[1] === undefined && digits[0] !== "0") {
         firstDigit = "0";
         secondDigit = digits[0];
       }else if(digits[0] === "0" ) {
         firstDigit = "6";
         secondDigit = "0";
       }
       else {
         firstDigit = digits[0];
         secondDigit = digits[1];
       }
       binaryFirstColumn = this.convertToBinary(parseInt(firstDigit));
       binarySecondColumn = this.convertToBinary(parseInt(secondDigit));
       return { firstCol: [...binaryFirstColumn], secondCol: [...binarySecondColumn]};
     }

     static convertToBinary(digit: number) {
       var bits = [];
       var dividend = digit;
       var remainder = 0;
       while (dividend >= 2) {
           remainder = dividend % 2;
           bits.push(remainder);
           dividend = (dividend - remainder) / 2;
       }
       bits.push(dividend);
       return bits.join("");
   }
}

export default Util;