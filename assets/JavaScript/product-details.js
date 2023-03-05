
if( JSON.parse(localStorage.getItem("details")) !=null){
    let details= JSON.parse(localStorage.getItem("details"))
    

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
largeimg.style.marginBottom = "50px";
largeimg.style.width="500px";
largeimg.style.height="450px";
var img = document.querySelectorAll(".activeImg div img");
img.forEach(element=>{
element.style.marginBottom="12px"
element.style.width="120px"
element.style.height="100px"
})
largeimg.src=`${details.images[0]}`
console.log(largeimg.src)
if(details.images.length>img.length){
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
else{
  for (let i = 0; i < details.images.length; i++) {
    img[i].src=`${details.images[i]}`
    img[i].onclick = function () {
        img.forEach(element => {
            element.classList.remove("active");
            img[i].classList.add("active");
            largeimg.src = img[i].src;

        });
    }
}
}
///////////////// ADD TO CART BTN////////////////
var AddToCart=document.querySelector(".AddToCart")
let productsCartindetails = document.querySelector(".productsCart");
  
  let Checkoutindetails= document.querySelector(".Checkout");
  let productsCartArrayindetails=[]
  let clearbtnindetails=document.querySelector(".clear")
  let cartNmber = document.querySelector(".badge.badge-pill.badge-danger.notify");  

  // Check if Theres items In Local Storage
  if (localStorage.getItem("product")) {
    productsCartArrayindetails = JSON.parse(localStorage.getItem("product"));
    
  console.log(productsCartArrayindetails)
  if(productsCartArrayindetails.length !=0){
    addElementsToPageFrom(productsCartArrayindetails);}
  
      numberOnCart = 0;
      // console.log(productsCartArray.length);
      cartNmber.innerHTML = productsCartArrayindetails.length;
  }
  else{
    
  cartNmber = document.querySelector(".badge.badge-pill.badge-danger.notify");
  
  }
// if(getCookie("username")){
  AddToCart.addEventListener("click",()=>{
  
    productObj = {
      id: `${details.id}`,
      name: details.name,
      price: `$${details.price}`,
      imgSrc: details.images[0],
      quantity:"1",
      Total:`$${details.price}`
    };
        
          var index = productsCartArrayindetails.findIndex(item => item.id == details.id);
          console.log(index)
          if(index ==-1){
         productsCartArrayindetails.push(productObj);}
         else{
          productsCartArrayindetails[index].quantity=Number(productsCartArrayindetails[index].quantity)+1;
          productsCartArrayindetails[index].Total=`$${Number(productsCartArrayindetails[index].price.replace("$", ""))*Number(productsCartArrayindetails[index].quantity)}`
         }
       
        
         console.log(productsCartArrayindetails);
     
    
          window.localStorage.setItem("product", JSON.stringify(productsCartArrayindetails));
         
          
      addElementsToPageFrom(productsCartArrayindetails);
         
        
        })
// }
// else{
//   createAlert("You Must logIn to pay", "danger")
// }
    
  
  
  
  
  function addElementsToPageFrom(productsCartArrayindetails) {
    productsCartindetails.innerHTML = "";
  
    productsCartArrayindetails.forEach((item) => {
      // Create Main Div
      productsCartArrayindetails = JSON.parse(localStorage.getItem("product"));
      // console.log(arrayUniqueByKey)
      cartNmber.innerHTML = productsCartArrayindetails.length;
      let div = document.createElement("div");
      div.className = "row";
      let divcol1 = document.createElement("div");
      divcol1.className = "col-6";
      let divcol2 = document.createElement("div");
      divcol2.className = "col-6";
      div.appendChild(divcol1);
      div.appendChild(divcol2);
      div.setAttribute("data-id", item.id);
      let itemName = document.createElement("p");
      itemName.appendChild(document.createTextNode(item.name));
      let itemPrice = document.createElement("p");
      itemPrice.appendChild(document.createTextNode(item.Total));
      let itemImg=document.createElement("img");
      itemImg.className="img-fluid";
      itemImg.src=`${item.imgSrc}`;
      divcol1.appendChild(itemImg);
      divcol2.appendChild(itemName);
      divcol2.appendChild(itemPrice);
  productsCartindetails.append(div);
  let hr=document.createElement("hr");
  productsCartindetails.append(hr);
  let itemqun=document.createElement("input");
  itemqun.value=item.quantity;
  itemqun.setAttribute("min","1");
  itemqun.setAttribute("type","number");
  itemqun.setAttribute("id","typeNumber");
  itemqun.classList.add("form-control");
  itemqun.classList.add("mt-2");
  itemqun.classList.add("d-inline");
  itemqun.classList.add("rounded-5");
  itemqun.classList.add("bg-light");
  itemqun.style.width="50%";
  divcol2.appendChild(itemqun);
  let delicon=document.createElement("i");
  delicon.classList.add("fa-sharp");
  delicon.classList.add("fa-solid");
  delicon.classList.add("fa-trash");
  
  delicon.classList.add("mx-2");
  delicon.classList.add("delete");
  let delicona=document.createElement("span");
  delicona.classList.add("d-inline");
  delicona.classList.add("pointer");
  delicona.appendChild(delicon)
  divcol2.appendChild(delicona);
  delicona.onclick=function(){
    delicona.parentElement.parentElement.remove();
    document.querySelector("hr").remove();
    deleteTaskWith(item.id);
    productsCartArrayindetails = JSON.parse(localStorage.getItem("product"));
    cartNmber.innerHTML = productsCartArrayindetails.length;
    if(productsCartArrayindetails.length==0){
      let h2=document.createElement("h2")
      h2.innerHTML="The cart is empty"
      h2.className="empty"
      productsCartindetails.append(h2)
    }
    }
    itemqun.onchange=function(){
      productsCartArrayindetails=window.localStorage.getItem("product");
      let multi=Number(item.price.replace("$", ""))*Number(itemqun.value)
      itemPrice.innerHTML=`$${multi}`;
      item.quantity=itemqun.value
      item.Total=`${itemPrice.innerHTML}`;
      productsCartArrayindetails= deleteTaskWith(item.id);
      productsCartArrayindetails.push(item);
    window.localStorage.setItem("product", JSON.stringify(productsCartArrayindetails));
    
    }
    });
    
  }
  function deleteTaskWith(ID) {
   
    productsCartArrayindetails = productsCartArrayindetails.filter((item) => item.id != ID);
  
    window.localStorage.setItem("product", JSON.stringify(productsCartArrayindetails));
    return productsCartArrayindetails;
  }
  
  
  
  clearbtnindetails.addEventListener("click", ()=>{
    localStorage.removeItem("product");
    productsCartArrayindetails=[];
    productsCartindetails.innerHTML = "";
    cartNmber.innerHTML = productsCartArrayindetails.length;
    let h2=document.createElement("h2")
    h2.innerHTML="The cart is empty"
    h2.className="empty"
    productsCartindetails.append(h2)
  });
  
    Checkoutindetails.addEventListener("click",()=>{
  if(getCookie("username")){
    if(productsCartArrayindetails.length !=0){
    window.location.replace("assets/HTML/checkout.html");}
    else{
      createAlert("Your cart is empty", "danger")
    }
  }
      else{
        createAlert("You Must logIn to pay", "danger")
      }
    })
  
}



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
