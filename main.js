
const textElm = document
    .querySelector("#designation-container > span");

const texts = [
    'Full Stack Engineer',
    'Developer'
];

let index = 0;
let i = 0;
let k = 1;
let reverse = false;

setInterval(()=>{
    const text = texts[index];
    textElm.innerText = text.substring(0, !reverse ? k++ % 3 ? i : ++i : --i);
    if (i === (text.length + 20)){
        reverse = true;
    }
    if (k === 4) k = 1;
    if (i === -2){
        reverse = false;
        index++;
        if (index === texts.length) index = 0;
        k = 1;
        i = 0;
    }
}, 40);


const projectsDropdown1 = document.getElementById("projectsDropdown1");
const projectsDropdown2 = document.getElementById("projectsDropdown2");
const projectsDropdown3 = document.getElementById("projectsDropdown3");

const arrowIcon1 = document.getElementById("arrowIcon1");
const arrowIcon2 = document.getElementById("arrowIcon2");
const arrowIcon3 = document.getElementById("arrowIcon3");


projectsDropdown1.addEventListener('show.bs.collapse', () => {
        arrowIcon1.style.transform = 'rotate(180deg)';
    });

projectsDropdown1.addEventListener('hide.bs.collapse', () => {
        arrowIcon1.style.transform = 'rotate(0deg)';
    });

projectsDropdown2.addEventListener('show.bs.collapse', () => {
    arrowIcon2.style.transform = 'rotate(180deg)';
});

projectsDropdown2.addEventListener('hide.bs.collapse', () => {
    arrowIcon2.style.transform = 'rotate(0deg)';
});

projectsDropdown3.addEventListener('show.bs.collapse', () => {
    arrowIcon3.style.transform = 'rotate(180deg)';
});

projectsDropdown3.addEventListener('hide.bs.collapse', () => {
    arrowIcon3.style.transform = 'rotate(0deg)';
});

document.getElementById('btn-contact').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

function imagesLoaded() {
    const images = document.querySelectorAll('img'); // Select all images
    let loadedImagesCount = 0;
    const totalImages = images.length;

    return new Promise((resolve) => {
        images.forEach((img) => {
            if (img.complete) {
                loadedImagesCount++;
                if (loadedImagesCount === totalImages) {
                    resolve(); // All images are loaded
                }
            } else {
                img.addEventListener('load', () => {
                    loadedImagesCount++;
                    if (loadedImagesCount === totalImages) {
                        resolve();
                    }
                });

                img.addEventListener('error', () => {
                    loadedImagesCount++;
                    if (loadedImagesCount === totalImages) {
                        resolve();
                    }
                });
            }
        });
    });
}

window.addEventListener('load', function() {

    imagesLoaded().then(() => {
        const splashScreen = document.getElementById('splash-screen');

        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 500);
    });
});
