var shoppingCart = [];

function addToCart(itemName, itemPrice){
  var item = {};
  item[itemName] = itemPrice
  shoppingCart.push(item);

}

function priceCheck(name){
  for(item in shoppingCart){
    
    for(itemName in shoppingCart[item]){

    if(itemName == name){

      return shoppingCart[item][itemName];
    }
  }
  }
  console.log("the searched item is not in the shopping cart array!")
}


function totalPriceCheck(){
  var totalPrice = 0;
  for(item in shoppingCart){
    
    for(itemName in shoppingCart[item]){
      totalPrice+=shoppingCart[item][itemName];
    
  }
  }
  return totalPrice;
}

addToCart("Tea",30);
addToCart("Chocolate",5);
console.log(priceCheck("Tea"));
console.log(priceCheck("Milk"));
console.log(totalPriceCheck());