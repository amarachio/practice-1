var sc = 0;  var price = 0;
document.getElementsByClassName('price-10').addEventListeners('click', function oga() {

sc+=1;
console.log(sc);
console.log(this.className);
document.getElementById('cart-price').textContent = sc;
});
