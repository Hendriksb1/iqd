const adTop = document.querySelector('.ad');
const adFixed = document.querySelector('#ad__fixed');
const adSticky= document.querySelector('#ad__sticky');
const adStarts = document.querySelectorAll('.ad__start');
const adEnd = document.querySelector('.ad__end');


const handler = (entries) => {
  console.log(!entries[0].isIntersecting)

  // entries is an array of observed dom nodes
  // we're only interested in the first one at [0]
  // because that's our .sentinal node.
  // Here observe whether or not that node is in the viewport
  if (!entries[0].isIntersecting) {
    adTop.classList.add('ad--sticky')
    adSticky.classList.toggle('ad__content--hidden')
    adFixed.classList.toggle('ad__content--hidden')
  } else {
    adTop.classList.remove('ad--sticky')
    // adSticky.classList.toggle('ad__content--hidden')
    // adFixed.classList.add('ad__content--hidden')
  }
}

const handlerEnd = (entries) => {
    console.log(!entries[0].isIntersecting)
  
    // entries is an array of observed dom nodes
    // we're only interested in the first one at [0]
    // because that's our .sentinal node.
    // Here observe whether or not that node is in the viewport
    if (!entries[0].isIntersecting) {
      adFixed.classList.add('ad__content--hidden')
      adSticky.classList.remove('ad__content--hidden')
    } else {
      // adSticky.classList.toggle('ad__content--hidden')
      // adFixed.classList.add('ad__content--hidden')
    }
  }

// create the observer
const observer = new window.IntersectionObserver(handler)
const observerEnd = new window.IntersectionObserver(handlerEnd)
// give the observer some dom nodes to keep an eye on

adStarts.forEach(element => observer.observe(element))

observerEnd.observe(adEnd);





