const people = {
    "alexa": {
        message: "Happy valentines balew, miss na miss ko nayung tropa mo",
        image: "images/alexa.jpg",
        type: "girl"
    },
    "ariana": {
        message: "Happy valentines sa pinaka balew kong kaibigan, sana di ka magbago",
        image: "images/ariana.jpg",
        type: "girl"
    },
    "heart": {
        message: "Happy birthday and happy valentines balew, sa susunod sana wag mo babanggain yung motor na makakasalubong natin. Enjoy your day",
        image: "images/heart.jpg",
        type: "girl"
    },
    "cortez": {
        message: "Happy valentines sa pinaka demonyo sa friend group namin",
        image: "images/cortez.jpg",
        type: "girl"
    },
    "aira": {
        message: "Happy valentines nhak, wag mo na ako judge kung nagustohan ko ulit si you know who",
        image: "images/aira.jpg",
        type: "girl"
    },
    "james": {
        message: "Happy valentines balew, genshin na oi",
        image: "images/james.jpg",
        type: "boy"
    },
    "keds": {
        message: "Happy valentines te, grabeng chismisan yan nalaman mo pa na crush ko si Rieze",
        image: "images/keds.jpg",
        type: "cousin"
    },
    "les": {
        message: "Happy valentines te, I'm grateful na naging cousin kita sa lifetime na to, di lang cousin as in parang tropa talaga. Enjoy this day goodluck sa research",
        image: "images/lester.jpg",
        type: "cousin"
    },
    "nalyn": {
        message: "Happy valentines te, swerte namin naging ate ka namin sa lifetime na to. Sana mag swimming na ulit",
        image: "images/paula.jpg",
        type: "cousin"
    },
    "jade": {
        message: "Happy Valentines balew, yan na ah may flowers sa baba, may picture pa. Sana alam mo gano katagal to ginawa",
        image: "images/jade.jpg",
        type: "girl"
    },
    "aloha":{
        message:"Happy valentines demonyo kong bestfreind, wag na kayo mag request ni jade ng flower please lang wala na ako pera",
        image:"images/aloha.jpg",
        type:"girl"
    }
};

let currentName = "";

function checkName() {
    let nameInput = document.getElementById("nameInput").value.toLowerCase();

    if (people[nameInput]) {
        currentName = nameInput;
        document.getElementById("page1").classList.remove("active");
        document.getElementById("page2").classList.add("active");
    } else {
        alert("This card is not for you 😢");
    }
}

function showFinal() {

    // Remove hearts when page 3 opens
    removeHearts();

    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.add("active");

    document.getElementById("finalMessage").innerHTML =
        "Happy Valentine's, " + 
        currentName.charAt(0).toUpperCase() + 
        currentName.slice(1) + "💐💜";

    document.getElementById("personalMessage").innerHTML =
        people[currentName].message;

    document.getElementById("personalImage").src =
        people[currentName].image;

    applySpecialEffects(people[currentName].type);
}

/* 💗 Minimal Hearts */
for(let i=0; i<6; i++){
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (5 + Math.random()*3) + "s";
    document.body.appendChild(heart);
}

/* Remove Hearts */
function removeHearts(){
    document.querySelectorAll(".heart").forEach(h => h.remove());
}

/* Special Effects */
function applySpecialEffects(type){

    if(type === "girl"){
        addBouquet();
    }

    if(type === "boy"){
        createStars();
    }
}

/* 🌸 Bouquet for Girls */
function addBouquet(){
    const bouquet = document.createElement("img");
    bouquet.src = "images/bouquet.png";   // ADD bouquet image in images folder
    bouquet.classList.add("bouquet");
    document.getElementById("page3").appendChild(bouquet);
}

/* 🌌 Constellation */
function createStars(){
    for(let i=0; i<25; i++){
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random()*100 + "vh";
        star.style.left = Math.random()*100 + "vw";
        document.body.appendChild(star);
    }
}

/* 📱 Swipe Up Detection */

let touchStartY = 0;
let touchEndY = 0;

const swipeCard = document.getElementById("swipeCard");

if(swipeCard){

    swipeCard.addEventListener("touchstart", function(e){
        touchStartY = e.changedTouches[0].screenY;
    });

    swipeCard.addEventListener("touchend", function(e){
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

}

function handleSwipe(){
    if(touchStartY - touchEndY > 50){
        showFinal();   // Swipe up triggers card open
    }
}
