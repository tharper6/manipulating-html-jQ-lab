// Make a button appear on page/ display nice alert when clicked
let btn = document.createElement('button')
let btnText = document.createTextNode('Click Me')
btn.appendChild(btnText)
document.body.appendChild(btn)


btn.addEventListener('click', function () {
    alert('Hello Beautiful People!')
})

// Create alert of whatever user places in text box
let meBtn = document.getElementById('alertButton')
meBtn.addEventListener('click', function () {
    let getInput = document.getElementById('textInput')
    alert(getInput.value)
})

// Change background color when hovered
let getDiv = document.getElementById('div')
getDiv.addEventListener('mouseover', function () {
    getDiv.style.backgroundColor = '#0091ea';
})

// Change background color back when not hovered
getDiv.addEventListener('mouseout', function () {
    getDiv.style.backgroundColor = 'white';
})

// random par colors when clicked
function randomColors() {
    let parColors = ['#009745', '#472514', '#47ef', '#024758', '#994578']
    let randomColors = Math.floor(Math.random() * parColors.length)
    return (parColors[randomColors])
}

let getPar = document.getElementById('par')
getPar.addEventListener('click', function () {
    getPar.style.color = randomColors()
})

// Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
let getButtonThree = document.getElementById('buttonThree')
getButtonThree.addEventListener('click', function () {
    let span = document.createElement('span')
    let spanText = document.createTextNode('Trent Harper')
    span.appendChild(spanText)

    let getEmptyDiv = document.getElementById('emptyDiv')
    getEmptyDiv.appendChild(span)
})

// Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). 
// When the button is clicked, add each friend's name as an li to the ul on the page.
let friends = ['Sydney', 'Tray', 'Manny', 'Sean', 'Amy', 'Austin', 'Jennifer', 'Gus', 'Evans', 'Matt']
let getSecondButton = document.getElementById('friendsButton')
getSecondButton.addEventListener('click', function () {
    let getUl = document.getElementById('friendsUl')
    let li = document.createElement('li')
    getUl.appendChild(li)
    let liText = document.createTextNode(friends[0]);
    li.appendChild(liText)
})