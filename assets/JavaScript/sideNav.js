function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

productsCart = document.querySelector("div.productsCart.container");
console.log(productsCart);
let productsCartArrary = [];

// Add product to cart
if (getCookie("username")) {
  products.addEventListener("click", (e) => {
    if (e.target.classList.contains("addBtn")) {
      const element = e.target.parentNode.parentNode;
      // console.log(element);
      //  get data from cart
      let poductName = element.querySelector("h5").innerHTML;
      let poductPrice = element.querySelector("h6").innerHTML;
      let poductImg = element.querySelector("img").src;
      let productID = element.getAttribute("data-id");
      // console.log(poductName);
      // console.log(poductPrice);
      // console.log(poductImg);
      // console.log(productID);

      productObj = {
        id: productID,
        name: poductName,
        price: poductPrice,
        imgSrc: poductImg,
      };
    
      // if(productsCartArrary.length!=0){
      // for(let i=0;i<productsCartArrary.length;i++){
      //   if(productsCartArrary[i].id !=productObj.id){
          productsCartArrary.push(productObj);
      //     console.log("added")
      //   }
      // }}
      // else{
      //   productsCartArrary.push(productObj);
      //   console.log("not added")

      // }
      
      localStorage.setItem("product", JSON.stringify(productsCartArrary));
      // wid;
    }
    // console.log(productsCartArrary);
  });
}
