const maskedImage = document.querySelector(".color-image");
maskedImage.classList.add("mask-animation");

setTimeout(function () {
    document.getElementById("test").style.display = "flex";
}, 12000);


const textSnippets = [
    "SAHAN Rajapaksha.",
    "Programmer.",
    "Game Developer.",
    "Designer.",
    "Artist"
];
let currentIndex = 0;

const h1Element = document.querySelector("#test h1");

function changeText() {
    h1Element.textContent = textSnippets[currentIndex];
    //h1Element.parentElement.style.display = "block";
    currentIndex++;

    if (currentIndex >= textSnippets.length) {
        currentIndex = 0;
    }

    setTimeout(changeText, 16000);
}

changeText();

// document.addEventListener("DOMContentLoaded", function () {
//     const backgroundImages = [
//         '../Images/gtasahanresized.jpg',
//         '../Images/gamedev1.jpg',
//         '../Images/desktopdev1.jpg',
//         '../Images/webdev1.jpg'
//     ];

//     let currentIndex = 0;
//     const container = document.querySelector('.main-image');
//     container.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;

//     function changeBackgroundImage(){
//         currntIndex = (currentIndex + 1) % backgroundImages.length;
//         container.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;

//     }

//     setInterval(changeBackgroundImage, 10000);
// });

