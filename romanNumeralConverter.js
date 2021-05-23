function convertToRoman(num) {
    const basicSymbols = { 1:'I', 5:'V', 10:'X', 50:'L', 100:'C', 500:'D', 1000:'M' }
    var str = [], decimal = 10;
  
    function beforeALarger(s1, pNum, exp) {
        if (pNum == 0) return '';
        const r = pNum/(decimal**exp);
        return basicSymbols[s1].repeat(r);
    }
  
    function afterALarger(s5, s1, pNum, exp) {
        if (pNum == 0) return '';
        const r = (pNum-s5)/(decimal**exp);
        return basicSymbols[s5] + basicSymbols[s1].repeat(r);
    }
  
    function decimalToRoman(pNum, exp) {
        const s1 = 1*decimal**exp, s5 = 5*decimal**exp, s10 = 10*decimal**exp;
        switch (true) {
            case pNum < (s5-s1): return beforeALarger(s1, pNum, exp);
            case pNum < (s5): return basicSymbols[s1]+basicSymbols[s5];
            case pNum == (s5): return basicSymbols[s5];
            case pNum < (s10-s1): return afterALarger(s5, s1, pNum, exp);
            case pNum < (s10): return basicSymbols[s1]+basicSymbols[s10];
        }
    }
  
    const numStr = num.toString().split("").reverse();
    for (let exp = 0; exp < numStr.length; exp++) {
        const pNum = numStr[exp]*decimal**exp;
        const pRoman = decimalToRoman(pNum, exp);
        str.unshift(pRoman)
    }
    return str.join("");
}