const prompt= require("prompt-sync")();
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
let balance = deposit()
console.log(balance);
const numberOFLines = getNumberOfLines();
console.log(numberOFLines);
const betAmount = getBetAmount(balance,numberOFLines)