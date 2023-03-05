
function openNav() {
  if( document.getElementById("mySidenav").style.width == "350px"){
    document.getElementById("mySidenav").style.width = "0";
  }
  else{
    document.getElementById("mySidenav").style.width = "350px";
  }

//     if(document.getElementById("mySidenav").style.width == "0px"){
      
//       if(window.innerWidth===500){
       
//         document.getElementById("mySidenav").style.width = "250px";
//         document.getElementsByTagName("input").width="150px"
//       }
//       else{
//         document.getElementById("mySidenav").style.width = "350px";
//       }
    
//   }
//   else{
//     document.getElementById("mySidenav").style.width = "0px";
//   }
  

}

function closeNav() {
 document.getElementById("mySidenav").style.width = "0"; 
}
// to access the cart
productsCart = document.querySelector("div.productsCart.container");
let Checkout= document.querySelector(".Checkout");
let productsCartArray=[]
let clearbtn=document.querySelector(".clear")
  





// Check if Theres items In Local Storage
if (localStorage.getItem("product")) {
  productsCartArray = JSON.parse(localStorage.getItem("product"));
// console.log(productsCartArray)
  addElementsToPageFrom(productsCartArray);
  cartNmber = document.querySelector(".badge.badge-pill.badge-danger.notify");
    numberOnCart = 0;
    // console.log(productsCartArray.length);
    cartNmber.innerHTML = productsCartArray.length;
}
else{
  
cartNmber = document.querySelector(".badge.badge-pill.badge-danger.notify");

}

if (getCookie("username")) {
  products.addEventListener("click", (e) => {
    if (e.target.classList.contains("addBtn")) {
     
      const element = e.target.parentNode.parentNode;
      
      //  get data from cart
      let poductName = element.querySelector("h5").innerHTML;
      let poductPrice = element.querySelector("h6").innerHTML;
      let poductImg = element.querySelector("img").src;
      let productID = element.getAttribute("data-id");
      

      productObj = {
        id: productID,
        name: poductName,
        price: poductPrice,
        imgSrc: poductImg,
        quantity:1,
        Total:poductPrice
      };
      var index = productsCartArray.findIndex(item => item.id == productID);
      console.log(index)
      if(index ==-1){
     productsCartArray.push(productObj);}
     else{
      productsCartArray[index].quantity+=1;
      productsCartArray[index].Total=`$${Number(productsCartArray[index].price.replace("$", ""))*Number(productsCartArray[index].quantity)}`
     }
   
    
     console.log(productsCartArray);
 

      window.localStorage.setItem("product", JSON.stringify(productsCartArray));
     
      
  addElementsToPageFrom(productsCartArray);
     
    }
   
  });
}



function addElementsToPageFrom(productsCartArray) {
  productsCart.innerHTML = "";

  productsCartArray.forEach((item) => {
    // Create Main Div
    productsCartArray = JSON.parse(localStorage.getItem("product"));
    // console.log(arrayUniqueByKey)
    cartNmber.innerHTML = productsCartArray.length;
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
productsCart.append(div);
let hr=document.createElement("hr");
productsCart.append(hr);
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
  productsCartArray = JSON.parse(localStorage.getItem("product"));
  cartNmber.innerHTML = productsCartArray.length;
  }
  itemqun.onchange=function(){
   productsCartArray=window.localStorage.getItem("product");
    let multi=Number(item.price.replace("$", ""))*Number(itemqun.value)
    itemPrice.innerHTML=`$${multi}`;
    item.quantity=itemqun.value
    item.Total=`${itemPrice.innerHTML}`;
    productsCartArray= deleteTaskWith(item.id);
    productsCartArray.push(item);
  window.localStorage.setItem("product", JSON.stringify(productsCartArray));
  
  }
  });
  
}
function deleteTaskWith(ID) {
 
  productsCartArray = productsCartArray.filter((item) => item.id != ID);

  window.localStorage.setItem("product", JSON.stringify(productsCartArray));
  return productsCartArray;
}



clearbtn.addEventListener("click", ()=>{
  localStorage.removeItem("product");
  productsCartArray=[];
  productsCart.innerHTML = "";
  cartNmber.innerHTML = productsCartArray.length;
});

  Checkout.addEventListener("click",()=>{
if(getCookie("username")){
  window.location.replace("assets/HTML/checkout.html");
}
    else{
      createAlert("You Must logIn to pay", "danger")
    }
  })
