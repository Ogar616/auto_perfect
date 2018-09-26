const scrollTo = element => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
};


(() => {

//scrolling page to sections
    const anchors = document.querySelectorAll("a");

    anchors.forEach(a => {
    a.addEventListener("click", () => {
        let href = a.getAttribute("href");
        let attr = href.slice(1, href.length);
        scrollTo(document.getElementById(attr));
    });

});

//slider
const prevDef = (e) => {
    e.preventDefault();
};

const a = document.getElementsByTagName("a");
const cfImg = document.getElementsByClassName("coverflow__image");

let scaleI = 0;
for (scaleI; scaleI < a.length; scaleI++) {
    if (scaleI === 3) {
        continue;
    } else {
        a[scaleI].style.cursor = "default";
        a[scaleI].addEventListener("click", prevDef);
    }
}

const forScale = (coverflowPos) => {
    for (scaleI = 0; scaleI < a.length; scaleI++) {
        a[scaleI].style.cursor = "default";
        a[scaleI].addEventListener("click", prevDef);
    }
    for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
        if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
            cfImg[scaleI].parentElement.style.cursor = "pointer";
            cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
        }
    }
};

const setupCoverflow = (coverflowContainer) => {
    let coverflowContainers;

    if (typeof coverflowContainer !== "undefined") {
        if (Array.isArray(coverflowContainer)) {
            coverflowContainers = coverflowContainer;
        } else {
            coverflowContainers = [coverflowContainer];
        }
    } else {
        coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
    }

    coverflowContainers.forEach(containerElement => {
        let coverflow = {};
        let prevArrows, nextArrows;

        coverflow.container = containerElement;
        coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
        coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

        coverflow.images.forEach((coverflowImage, i) => {
            coverflowImage.dataset.coverflowIndex = i + 1;
        });

        coverflow.container.dataset.coverflowPosition = coverflow.position;

        prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
        nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));

        const setPrevImage = () => {
            coverflow.position = Math.max(1, coverflow.position - 1);
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            forScale(coverflow.position);
        };


        const setNextImage = () => {
            coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            forScale(coverflow.position);
        };

        const jumpToImage = evt => {
            coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            setTimeout(() => {
                forScale(coverflow.position);
            }, 1);
        };

        const onKeyPress = evt => {
            switch (evt.which) {
                case 37:
                    setPrevImage();
                    break;
                case 39:
                    setNextImage();
                    break;
            }
        };

        prevArrows.forEach(prevArrow => {
            prevArrow.addEventListener('click', setPrevImage);
        });
        nextArrows.forEach(nextArrow => {
            nextArrow.addEventListener('click', setNextImage);
        });
        coverflow.images.forEach(image => {
            image.addEventListener('click', jumpToImage);
        });
        window.addEventListener('keyup', onKeyPress);
    });
};



setupCoverflow();

})

(() => {

});







