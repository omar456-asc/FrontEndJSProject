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
    // console.log(myData.products[0].id);
    if (cardContainer) {
      document.getElementById("card-container").replaceWith(cardContainer);
      return;
    }

    cardContainer = document.getElementById("card-container");
    myData.products.forEach((data) => {
      createCard(data);
    });
  });

//bootstrap card
let cardContainer;

let createCard = (data) => {
  let card = document.createElement("div");
  card.className = "col-lg-4 col-md-6 p-2 card shadow cursor-pointer";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let fullName = document.createElement("h5");
  fullName.innerText = data.id + " " + data.title;
  fullName.className = "card-fullName";

  let img = document.createElement("img");
  img.src = data.images[1];

  let email = document.createElement("div");
  email.innerText = data.email;
  email.className = "card-color";

  cardBody.appendChild(fullName);
  cardBody.appendChild(img);
  cardBody.appendChild(email);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);
};

// /////////// end products data
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
