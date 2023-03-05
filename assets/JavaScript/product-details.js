if( JSON.parse(localStorage.getItem("details")) !=null){
    let details= JSON.parse(localStorage.getItem("details"))
    
    console.log(details)
  
  

var productname=document.querySelector(".product-name")
productname.innerHTML=details.name
var productprice=document.querySelector(".product-price")
productprice.innerHTML=`$${details.price}`
var productbrand=document.querySelector(".brand")
productbrand.innerHTML=`${details.brand}`
var productcategory=document.querySelector(".category")
productcategory.innerHTML=`${details.category}`
var productdesc=document.querySelector(".description")
productdesc.innerHTML=`${details.description}`
var discountPercentage=document.querySelector(".discountPercentage")
discountPercentage.innerHTML=`${details.discountPercentage}`
var rating=document.querySelector(".rating")
rating.innerHTML=`${details.rating}`
var stock=document.querySelector(".stock")
stock.innerHTML=`${details.stock}`
var largeimg = document.querySelector(".largeimg");
var img = document.querySelectorAll(".activeImg div img");
largeimg.src=`${details.largeimg}`
console.log(largeimg.src)
for (let i = 0; i < img.length; i++) {
    img[i].src=`${details.images[i]}`
    img[i].onclick = function () {
        img.forEach(element => {
            element.classList.remove("active");
            img[i].classList.add("active");
            largeimg.src = img[i].src;

        });
    }
}}

function openNav() {
    if( document.getElementById("mySidenav").style.width == "320px"){
      document.getElementById("mySidenav").style.width = "0";
    }
    else{
      document.getElementById("mySidenav").style.width = "320px";
    }
  }
  
  function closeNav() {
   document.getElementById("mySidenav").style.width = "0"; 
  }
