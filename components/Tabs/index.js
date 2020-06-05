// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

//capture the topics div
const divTopics = document.querySelector('.topics')

//create a function that makes the topic tab divs
function divTopicsMaker (topic){
    // create a new div tab
    const divTab = document.createElement('div')
    // add class of tab to the div
    divTab.classList.add('tab')
    // add the new div to the capture div topics element
    divTopics.appendChild(divTab)
    // update the new div tab's text content to equal each of the topics returned from the axios request via foreach
    divTab.textContent = topic
    // return the newly constructed div tab
    return divTab
}

// using axios, send a GET request to URL provided
    axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    // what to do with that request - take what comes back and
    .then(response => {
        // for each of the topics in the response.data, found by looking in the resonse object for the key of .topics
        response.data.topics.forEach(topic =>{
            // create a new topic tab by inserting the topic into the function of divTopicsMaker
            const topicTab = divTopicsMaker(topic)
            // return the newly constructed topic tab
            return topicTab
        })
})