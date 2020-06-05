/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//grab the carousel pics element in the DOM to manipulate
const carouselPicContainer = document.querySelector(".carousel-container")

const carouselPicsArray = []

//create a function that makes the article div cards, taking as arguments the needed data from the axios response - headline of article, url of authros image, and author's name
function carouselPicMaker (){
    // create the elements
    const carouselDiv = document.createElement('div')
    const leftButton = document.createElement('div')
    const image1 = document.createElement('img')
    const image2 = document.createElement('img')
    const image3 = document.createElement('img')
    const image4 = document.createElement('img')
    const rightButton = document.createElement('div')
    // add classes  to the newly created elements
    carouselDiv.classList.add('carousel')
    leftButton.classList.add('left-button')
    rightButton.classList.add('right-button')
    // append the child elements to their parents
    carouselPicContainer.appendChild(carouselDiv)
    carouselDiv.appendChild(leftButton)
    carouselDiv.appendChild(image1)
    carouselDiv.appendChild(image2)
    carouselDiv.appendChild(image3)
    carouselDiv.appendChild(image4)
    carouselDiv.appendChild(rightButton)
    // update the new element's content
    image1.src = 'assets/carousel/mountains.jpeg'
    image2.src = 'assets/carousel/computer.jpeg'
    image3.src = 'assets/carousel/trees.jpeg'
    image4.src = 'assets/carousel/turntable.jpeg'
    // return the newly constructed div
    return carouselDiv
}

// append created header to the captured DOM element

const carousel = carouselPicMaker()

carouselPicContainer.appendChild(carousel)