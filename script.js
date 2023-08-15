// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// show pop-up info
document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll(".card-body");
    const cardInfos = document.querySelectorAll(".card-info");
    const overlay = document.querySelector(".overlay");

    openButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            cardInfos[index].style.display = "block";
            overlay.style.display = "block";
        });
    });

    overlay.addEventListener("click", function () {
        cardInfos.forEach(function (cardInfo) {
            cardInfo.style.display = "none";
        });
        overlay.style.display = "none";
    });
}); 
