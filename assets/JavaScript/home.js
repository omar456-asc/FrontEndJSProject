// ///////// START Header scoller ///////////////////
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
// ///////// END Header scoller ///////////////////
// ///////////// start products fetch data /////////
fetch("../JSON/products.json")
  .then((res) => {
    let myData = res.json();
    return myData;
  })
  .then((myData) => {
    if (cardContainer) {
      document.getElementById("card-container").replaceWith(cardContainer);
      return;
    }

    cardContainer = document.getElementById("card-container");
    myData.products.forEach((data) => {
      createCard(data);
      filterProduct("all");

    });
  });
//bootstrap card
let cardContainer;

let createCard = (data) => {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", data.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", data.images[0]);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = data.title.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + data.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  
};
 //parameter passed from button (Parameter same as category)
 function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

// /////////// ######################end products data################################//
/////// START SCROLL UP BUTTON ////////////
let upSpan = document.querySelector(".up");

window.onscroll = () =>
  this.scrollY >= 500
    ? upSpan.classList.add("show")
    : upSpan.classList.remove("show");

upSpan.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
///////END SCROLL UP BUTTON ////////////

// ////////////////// toggle sign in /////////////
let signIn = document.getElementById("signIn");
let register = document.getElementById("register");

// console.log(signIn);
//Get cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if (getCookie("username")) {
  // console.log(document.cookie);
  // console.log(name);
  console.log((name = getCookie("username")));
  signIn.innerHTML = `${name}`;
  register.innerHTML = `LogOut`;
}

register.addEventListener("click", () => {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.location.href = "/";
});
