let image = document.querySelector(".image-content"),
transitionTime = 2400,
backgrounds = [
 "rgba(99, 177, 252, 1) 0%, rgba(77, 136, 202, 1) 10%, rgba(9, 9, 121, 1) 16%, rgba(6, 0, 55, 1) 31%, rgba(9, 9, 121, 1) 46%,  rgba(99, 8, 235, 1) 47%, rgba(255, 255, 255, 1) 50%",
 "rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 11%, rgba(16, 108, 213, 1) 20%, rgba(21, 44, 75, 1) 24%, rgba(48, 82, 38, 1) 35%, rgba(48, 82, 38, 1) 54%, rgba(114, 150, 6, 1) 58%, rgba(227, 250, 79, 1) 62%, rgba(255, 251, 235, 1) 68%, rgba(255, 251, 235, 1) 100%",
 "rgba(255,221,0,1) 11%, rgba(154,38,62,1) 30%, rgba(154,38,62,1) 47%, rgba(255,221,0,1) 63%",
 "rgba(254,254,254,1) 12%, rgba(161,122,196,1) 21%, rgba(48,103,184,1) 28%, rgba(58,161,105,1) 33%, rgba(58,161,105,1) 58%, rgba(48,203,177,1) 64%, rgba(189,187,252,1) 70%",
 "rgba(242,238,229,1) 10%, rgba(6,127,184,1) 26%, rgba(0,33,112,1) 35%, rgba(0,33,112,1) 37%, rgba(6,109,184,1) 46%, rgba(242,238,229,1) 58%",
 "rgba(31,50,105,1) 16%, rgba(42,128,191,1) 19%, rgba(242,238,229,1) 25%, rgba(242,229,229,1) 33%, rgba(242,238,229,1) 44%, rgba(42,128,191,1) 52%, rgba(25,92,166,1) 54%, rgba(25,92,166,1) 56%, rgba(189,177,181,1) 64%",
 "rgba(196,86,86,1) 28%, rgba(122,171,59,1) 39%, rgba(122,171,59,1) 46%, rgba(215,89,136,1) 60%",
 "rgba(157,211,226,1) 21%, rgba(102,196,193,1) 27%, rgba(255,157,9,1) 34%, rgba(255,157,9,1) 47%, rgba(210,142,41,1) 53%, rgba(196,168,227,1) 60%",
 " rgba(14,31,54,1) 21%, rgb(57, 168, 228) 27%, rgba(255,255,255,1) 32%, rgba(255,255,255,1) 38%, rgba(255,157,9,1) 46%, rgba(116,82,33,1) 53%, rgba(85,67,20,1) 57%, rgba(85,99,124,1) 66%"
];

const drawBackground = () => {
    let colorArray = backgrounds,
    randomElem = Math.floor(Math.random() * colorArray.length);
    return randomElem
};
const chanegeBg = () => {
    image.style.background = `radial-gradient( circle, ${backgrounds[drawBackground()]})`;
};
const removeFading = () => {
    image.classList.remove("fade-in-out");
};

const changeImage = () => {    
    image.classList.add("fade-in-out");
    window.setTimeout(chanegeBg, transitionTime/2);
    window.setTimeout(removeFading, transitionTime+10);
}

window.document.addEventListener("click", changeImage)