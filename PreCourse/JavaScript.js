var bank = 1000;
var wallet = 10;


function withdraw(money) {
  if(bank > 0 && bank >= money){
   bank-=money;
   wallet+=money;
  }else{
  console.log("bank empty");
  }
}



function deposit(money) {
  if(wallet > 0 && wallet >= money){
   wallet-=money;
   bank+=money;
  }else{
  console.log("wallet empty");
  }
}

deposit(10)
console.log(wallet)