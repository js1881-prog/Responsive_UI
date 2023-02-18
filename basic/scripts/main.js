// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/spring.png') {
        myImage.setAttribute('src', 'images/python.jpg');
    } else {
        myImage.setAttribute('src', 'images/spring.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
     localStorage.setItem('name', myName);
     myHeading.textContent = "Mozila is cool," + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozila is cool,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}