import '../scss/main.scss';

const scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
};

document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM LOADED");
    const anchors = document.querySelectorAll("a");

    anchors[0].addEventListener("click", () => {
           scrollTo(document.getElementById("about"));
       });

    anchors[1].addEventListener("click", () => {
        scrollTo(document.getElementById("services"));
    });

    anchors[2].addEventListener("click", () => {
        scrollTo(document.getElementById("aboutgallery"));
    });

    anchors[3].addEventListener("click", () => {
        scrollTo(document.getElementById("maps"));
    });

    anchors[4].addEventListener("click", () => {
        scrollTo(document.getElementById("contact"));
    });
});
