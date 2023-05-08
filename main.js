//  loadng
let loading =document.querySelector(".lodaing")
console.log(loading)
window.onload =()=>{
    setTimeout(() => {
       loading.style.display ="none" 
    }, 1000);
}


//  burger menu

let burgerMenu = document.querySelector(".burger-menu")
 let list = document.querySelector("ul")
burgerMenu.addEventListener("click",()=>{
  list.classList.toggle("show")
  burgerMenu.classList.toggle("is-active")
})


//  dark mode

let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")
 
//  1

let getMode =localStorage.getItem("mode")
if(getMode === "dark"){
    document.body.classList.toggle("dark")
}
function darkmode(){
    window.localStorage.setItem("mode","dark")
    document.body.classList.toggle("dark")
    if(!document.body.classList.contains("dark")){
        return localStorage.setItem("mode","light")
    } localStorage.setItem("mode","dark")
}

//  2

// function darkmode(){
// let getMode =localStorage.getItem("mode")
// if(getMode != null){
//   localStorage.removeItem("mode")
// } else{
//     localStorage.setItem("mode","dark")
// }
// document.body.classList.toggle("dark")
// }
// let getMode =localStorage.getItem("mode")
// if(getMode != null){
//     document.body.classList.toggle("dark")
//   }



moon.onclick = darkmode
sun.onclick = darkmode


//  change color



let root =document.querySelector(":root")
let spans =document.querySelectorAll(".color")
spans.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        let option = e.target.id
        root.style.setProperty('--option', `${option}`);
        localStorage.setItem("textColor",option)
    })

})
let getColor =localStorage.getItem("textColor")
function getLocalStorage(){
    root.style.setProperty('--option', `${getColor}`);
}
getLocalStorage()

if(!localStorage.getItem("textColor")){
    root.style.setProperty('--option', `#4169e1`);
}


//  auto writing 

let myTitle = document.querySelector(".title span");
let outoText = "Ahmad Ragab  a Front End";
let arrText = outoText.split("");
let charCount = 0;


function addchar(){
    myTitle.innerHTML+=arrText[charCount]
    charCount++
    if(charCount == 13){
  clearInterval(handel)
  setTimeout(() => {
    myTitle.innerHTML =""
    loping()
  }, 750);
    }
  if(charCount > arrText.length-1){
    clearInterval(handel)
    setTimeout(() => {
        myTitle.innerHTML =""
        charCount =0
        loping()
    }, 1000);
  }
}

let handel;
function loping(){
    handel =setInterval(() => {
        addchar()
    },200);
}
loping()




// Voice text in About part

let myName = document.querySelector(".info-about h3")
let descriptionFroMe = document.querySelector(".info-about p")
let voicebtn = document.querySelector(".info-about button")

voicebtn.addEventListener("click",()=>{
    let text =  myName.textContent + descriptionFroMe.textContent 

    var utterance = new SpeechSynthesisUtterance();

    utterance.text =text;

    utterance.lang = window.navigator.language;

    window.speechSynthesis.speak(utterance);
})










// Initialize Swiper
var swiper = new Swiper('.container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // Add navigation buttons
  swiper.on('init', function() {
    var nextBtn = document.createElement('div');
    nextBtn.classList.add('swiper-button-next');
    swiper.el.appendChild(nextBtn);
  
    var prevBtn = document.createElement('div');
    prevBtn.classList.add('swiper-button-prev');
    swiper.el.appendChild(prevBtn);
  });
  









