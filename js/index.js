// Your code goes here

// Selectors I can use (labels are below for some reason, idk, bad choice I guess)
const title = document.querySelector("title"); 
// Site title
const logo = document.querySelector(".logo-heading"); 
// "Fun Bus" title
const navLink = document.querySelectorAll(".nav-link"); 
// Array of nav links
const busImg = document.querySelector("header img"); 
// Bus image
const welcomeTitle = document.querySelector("header h2"); 
// Welcome title
const welcomeText = document.querySelector("header p");
// Welcome paragraph
const letsGoImg = document.querySelectorAll(".img-content img")
// Map image + canal image
const featuresTitle = document.querySelectorAll(".text-content h2");
// Let's Go! + Adventure Awaits
const featuresText = document.querySelector(".text-content p");
// Features text sections
const pickTitle = document.querySelector(".content-destination h2");
const pickText = document.querySelector(".content-destination p");
const pickImg = document.querySelector(".content-destination img");
// Title, text, and image from Destination section
const destTitle = document.querySelectorAll(".destination h4");
const destText = document.querySelectorAll(".destination p");
const destButton = document.querySelectorAll(".btn");
// Titles, Texts, and buttons from Sign Me Up! section
const allImg = document.querySelectorAll("img");
// All images
const allText = document.querySelectorAll("h1 h2 h3 h4 p a");
// All text



// 10 event listeners

function makeEvil(event) {
    for (let i = 0; i<navLink.length; i++){
        navLink[i].style.color = "red";
    }
    console.log(logo.textContent);
    title.textContent = "Haunted Tab";
    logo.innerHTML = "Fun Bus is Haunted!"; // I'm not supposed to use this?
    welcomeTitle.textContent = "Boo!";
    allImg.forEach(elem => {
        elem.style.filter = "grayscale(100%)"
    });
    destButton.forEach(elem => {
        elem.style.backgroundColor = "red"
    });
}
navLink[1].addEventListener("click", makeEvil);
// 1 - CLICKING the ABOUT link makes the page "evil"

function flipImage(event) {
    event.currentTarget.style.transform = "rotateY(180deg)";
}

allImg.forEach(elem => {
    elem.addEventListener("mouseover", flipImage);
});
// 2 - MOUSEOVER on ANY IMAGE makes it flip

function undoFlipImage(event) {
    event.currentTarget.style.transform = "rotateY(360deg)";
}

allImg.forEach(elem => {
    elem.addEventListener("mouseout", undoFlipImage);
});
// 3 - MOUSEOUT on ANY IMAGE makes it flip back


function removeLink(event) {
    console.log("is this working?");
    event.currentTarget.style.color = "white";
}

navLink.forEach(function(item){
    item.addEventListener("dblclick", removeLink);
})
// 4 - Remove a link that's clicked 


function pageReset(event) {
    location.reload();
};
navLink[3].addEventListener("click", pageReset);

// 5 - Reset the page when CONTACT is DOUBLE CLICKED


function boldButtonText(event) {
    event.currentTarget.style.color = "orange";
}
destButton.forEach(function(item){
    item.addEventListener("mouseover", boldButtonText);
})
// 6 - MOUSING OVER the SIGN UP BUTTONS turns their text orange

function undoBoldButtonText(event) {
    event.currentTarget.style.color = "white";
}
destButton.forEach(function(item){
    item.addEventListener("mouseout", undoBoldButtonText);
})
// 7 - MOUSING OUT the SIGN UP BUTTONS turns their text white again








//* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.



//* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`