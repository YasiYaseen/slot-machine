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
const depositAmount = deposit()
console.log(depositAmount);