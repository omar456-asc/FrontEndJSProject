// ///////// START Header scoller ///////////////////
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
// ///////// END Header scoller ///////////////////

// /////////Footer ///////////////////

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
