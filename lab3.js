let cartQuantity = 0;

document.getElementById("show").addEventListener("click", function () {
  document.getElementById("quantity").textContent = "Cart quantity: " + cartQuantity;
});

document.getElementById("add1").addEventListener("click", function () {
  cartQuantity = cartQuantity + 1;
});

document.getElementById("add2").addEventListener("click", function () {
  cartQuantity = cartQuantity + 2;
});

document.getElementById("add3").addEventListener("click", function () {
  cartQuantity = cartQuantity + 3;
});

document.getElementById("reset").addEventListener("click", function(){
    cartQuantity=0;
    document.getElementById("quantity").textContent=";"
});