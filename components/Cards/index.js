// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


const divArticles = document.querySelector('.cards-container')

//create a function that makes the article div cards, taking as arguments the needed data from the axios response - headline of article, url of authros image, and author's name
function divArticlesMaker (headline, authorPhoto, authorName){
    // create the elements
    const divCard = document.createElement('div')
    const divHeadline = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')
    // add classes  to the newly created elements
    divCard.classList.add('card')
    divHeadline.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')
    // append the child elements to their parents
    divArticles.appendChild(divCard)
    divCard.appendChild(divHeadline)
    divCard.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    imgDiv.appendChild(img)
    authorDiv.appendChild(authorsName)
    // update the new element's content to equal each of the article content returned from the axios request via forEach
    divHeadline.textContent = headline
    img.src = authorPhoto
    authorsName.textContent = authorName
    // return the newly constructed div tab
    return divCard
}

// using axios, send a GET request to URL provided
    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    // what to do with that request - take what comes back and
    .then(response => {
        // for each of the topics in the response.data, found by looking in the resonse object for the key of .topics
        response.data.articles.javascript.forEach(article =>{
            // create a new topic tab by inserting the topic into the function of divTopicsMaker
            const headlineDiv = divArticlesMaker(
            // return the newly constructed topic tab
            article.headline,
            article.authorPhoto,
            article.authorName
            )
            return headlineDiv
        })
        response.data.articles.bootstrap.forEach(article =>{
            // create a new topic tab by inserting the topic into the function of divTopicsMaker
            const headlineDiv = divArticlesMaker(
            // return the newly constructed topic tab
            article.headline,
            article.authorPhoto,
            article.authorName
            )
            return headlineDiv
        })
        response.data.articles.jquery.forEach(article =>{
            // create a new topic tab by inserting the topic into the function of divTopicsMaker
            const headlineDiv = divArticlesMaker(
            // return the newly constructed topic tab
            article.headline,
            article.authorPhoto,
            article.authorName
            )
            return headlineDiv
        })
        response.data.articles.node.forEach(article =>{
            // create a new topic tab by inserting the topic into the function of divTopicsMaker
            const headlineDiv = divArticlesMaker(
            // return the newly constructed topic tab
            article.headline,
            article.authorPhoto,
            article.authorName
            )
            return headlineDiv
        })
        response.data.articles.technology.forEach(article =>{
            // create a new topic tab by inserting the topic into the function of divTopicsMaker
            const headlineDiv = divArticlesMaker(
            // return the newly constructed topic tab
            article.headline,
            article.authorPhoto,
            article.authorName
            )
            return headlineDiv
        })
        
})