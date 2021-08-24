function bringShingara(taka){
    console.log("Shingara niye ay, ei ne", taka);
    console.log('mama Shingara den');
    var shingaraPrice = 10;
    var shingaraQuantity = taka / shingaraPrice; 
    return shingaraQuantity
}
var money = 200;
var shingara =bringShingara(money);
console.log( 'Ei nen', shingara)