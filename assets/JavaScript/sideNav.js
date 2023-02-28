
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

productsCart = document.querySelector("div.productsCart.container");
console.log(productsCart);
let productsCartArray =[];




// Check if Theres Tasks In Local Storage
if (localStorage.getItem("product")) {
  productsCartArray = JSON.parse(localStorage.getItem("product"));
  getDataFromLocalStorage();
  addElementsToPageFrom(productsCartArray);
  cartNmber = document.querySelector(".badge.badge-pill.badge-danger.notify");
    numberOnCart = 0;
    cartNmber.innerHTML = productsCartArray.length;
}
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
      
      productsCartArray.push(productObj);
      window.localStorage.setItem("product", JSON.stringify(productsCartArray));
      getDataFromLocalStorage();
      
  addElementsToPageFrom(productsCartArray);
     
    }
    // console.log(productsCartArrary);
  });
}

function getDataFromLocalStorage() {
  let product = window.localStorage.getItem("product");
  if (product) {
    let productArr = JSON.parse(product);
    console.log(productArr);
    // addElementsToPageFrom(productArr);
  }
}

function addElementsToPageFrom(productsCartArray) {
  productsCart.innerHTML = "";

  productsCartArray.forEach((item) => {
    // Create Main Div
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
    itemPrice.appendChild(document.createTextNode(item.price));
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
itemqun.setAttribute("value","0");
itemqun.setAttribute("min","0");
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
delicon.classList.add("d-inline");
delicon.classList.add("mx-2");
  
divcol2.appendChild(delicon);
  });
  
}