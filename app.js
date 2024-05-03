
const container = document.querySelector('.container');

window.onscroll = () => {
    container.style.left = `${-window.scrollY}px`;
};

let currentPosition = container.getBoundingClientRect().left;
console.log(currentPosition);
const callDistor = () => {

    let newPosition = container.getBoundingClientRect().left;
    let diff = newPosition - currentPosition;
    let spped = diff * 0.20;

    container.style.transform = `skewX(${spped}deg)`;
    currentPosition = newPosition;

    requestAnimationFrame(callDistor);
};

callDistor();