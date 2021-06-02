function checkCashRegister(price, cash, cid) {
    var currencies = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]].reverse();
  
    var toChange = cash - price;
    var change = {status: 'OPEN', change: []};
  
    function addToChange(currency, changed) {
      if (changed == 0) return;
      change['change'].push([currency[0], changed]);
      toChange = (toChange - changed).toFixed(2);
      cid.find(x => x[0]==currency[0])[1] = (cid.find(x => x[0]==currency[0])[1] - changed).toFixed(2);
    }
  
    // extract cash
   cid.reverse()
    .filter((c,i) => currencies[i][1] <= toChange && c[1] > 0)
    .map(c => {
      if (toChange > 0) {
        if (toChange > c[1]) {
          addToChange(c, c[1]);
        } else {
          const currency = currencies.find(x => x[0]==c[0])[1];
          let aux = toChange, count = 0;
          while(aux >= 0) {
            aux = (aux - currency).toFixed(2);
            count++;
          }
          addToChange(c, (count-1)*currency);
        }
      }
    });
  
    if (toChange > 0) {
      change = {status: 'INSUFFICIENT_FUNDS', change: []}
    } else {
      let suma = 0;
      cid.forEach(x => suma+=x[1]);
      if (suma == 0) {
        cid.map(z => {
          change['change'].map(y => {
            if (z[0] == y[0]) z[1] = y[1];
          })
        })
        change = { status: 'CLOSED', change: cid.reverse() }
      }
    };
    
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  