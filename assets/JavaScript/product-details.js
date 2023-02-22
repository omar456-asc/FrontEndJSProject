var largeimg = document.querySelector(".largeimg");
var img = document.querySelectorAll(".activeImg div img");

for (let i = 0; i < img.length; i++) {

    img[i].onclick = function () {
        img.forEach(element => {
            element.classList.remove("active");
            img[i].classList.add("active");
            largeimg.src = img[i].src;

        });
    }
}
