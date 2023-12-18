const prompt= require("prompt-sync")();
const ROWS =3 ;
const COLS =3 ;
const SYMBOL_COUNT = {
    "A":2,
    "B":4,
    "C":6,
    "D":8
}
const SYMBOL_VALUE={
    "A":5,
    "B":4,
    "C":3,
    "D":2 
}
const deposit = ()=>{
    while(true){
      const depositAmount =prompt("Enter a deposit amount :");
const numberdepositAmount = parseFloat(depositAmount);
if(isNaN(numberdepositAmount)|| numberdepositAmount<=0){
    console.log("Invalid Amount ,try again");
}else{
    return numberdepositAmount;
}
    }

}

const getNumberOfLines = ()=>{
    while(true){
      const lines =prompt("Enter the number of lines to bet on (1-3) :");
const numberOFLines = parseFloat(lines);
if(isNaN(numberOFLines)|| numberOFLines<=0 || numberOFLines >3){
    console.log("Invalid number ,try again");
}else{
    return numberOFLines;
}
    }

}
const getBetAmount = (balance ,numberOFLines)=>{
    while(true){
      const betAmount =prompt("Enter the total bet amount per line :");
const numberbetAmount = parseFloat(betAmount);
if(isNaN(numberbetAmount)|| numberbetAmount<=0 || numberbetAmount>balance/numberOFLines){
    console.log("Invalid Amount ,try again");
}else{
    return numberbetAmount;
}
    }

}
const spin =()=>{
    const symbols = [];
    for (const [symbol,count] of Object.entries(SYMBOL_COUNT)){
       for(let i=0;i<count;i++){
        symbols.push(symbol)
       }
    }
    
    const reels = [];
    for(let i = 0 ; i<COLS;i++){
        const reelSymbols = [...symbols];
        reels.push([]);
        for(let j=0;j<ROWS;j++){
            const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);
        }
    }
return reels;
}
console.log(spin());
let balance = deposit()
const numberOFLines = getNumberOfLines();
const betAmount = getBetAmount(balance,numberOFLines)