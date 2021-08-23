const ad = document.querySelector('.ad');
const adCloseBtn = document.querySelector('.ad__header');

let hideHeader = function () {
    ad.classList.add('ad--hidden')
    ad.classList.remove('ad--active')
}

adCloseBtn.addEventListener("click", hideHeader);