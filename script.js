/* ==========================================
   HAPPY BIRTHDAY WEBSITE
   Part 3A
========================================== */

window.onload = function () {

    launchConfetti();

    startCountdown();

};

// -----------------------------
// CONFETTI
// -----------------------------

function launchConfetti(){

    const duration = 5000;

    const end = Date.now() + duration;

    const interval = setInterval(function(){

        confetti({

            particleCount:8,

            spread:360,

            startVelocity:40,

            origin:{
                x:Math.random(),
                y:Math.random()-0.2
            }

        });

        if(Date.now()>end){

            clearInterval(interval);

        }

    },180);

}

// -----------------------------
// COUNTDOWN
// -----------------------------

const targetDate = new Date();

targetDate.setHours(20);

targetDate.setMinutes(0);

targetDate.setSeconds(0);

function startCountdown(){

    setInterval(function(){

        const now = new Date();

        let distance = targetDate - now;

        if(distance<0){

            distance=0;

        }

        const days = Math.floor(distance/(1000*60*60*24));

        const hours = Math.floor(
            (distance%(1000*60*60*24))
            /(1000*60*60)
        );

        const minutes = Math.floor(
            (distance%(1000*60*60))
            /(1000*60)
        );

        const seconds = Math.floor(
            (distance%(1000*60))
            /1000
        );

        document.getElementById("days").innerHTML=days;

        document.getElementById("hours").innerHTML=hours;

        document.getElementById("minutes").innerHTML=minutes;

        document.getElementById("seconds").innerHTML=seconds;

    },1000);

}

// -----------------------------
// BLOW OUT CANDLE
// -----------------------------

const flame = document.getElementById("flame");

const blowButton = document.getElementById("blowButton");

const surprise = document.getElementById("hiddenSurprise");

blowButton.addEventListener("click",function(){

    flame.style.display="none";

    surprise.style.display="block";

    confetti({

        particleCount:300,

        spread:180

    });

});

// -----------------------------
// GIFT
// -----------------------------

const giftBox=document.getElementById("giftBox");

const giftMessage=document.getElementById("giftMessage");

giftBox.addEventListener("click",function(){

    giftBox.style.transform="scale(1.5) rotate(720deg)";

    giftBox.innerHTML="💖";

    giftMessage.style.display="block";

    confetti({

        particleCount:200,

        spread:200

    });

});

// -----------------------------
// IMAGE UPLOAD
// -----------------------------

const upload=document.getElementById("imageUpload");

const gallery=document.getElementById("galleryContainer");

upload.addEventListener("change",function(e){

    const files=e.target.files;

    for(let file of files){

        const reader=new FileReader();

        reader.onload=function(event){

            const img=document.createElement("img");

            img.src=event.target.result;

            gallery.appendChild(img);

        }

        reader.readAsDataURL(file);

    }

});/* ==========================================
   HAPPY BIRTHDAY WEBSITE
   Part 3B
========================================== */

// -----------------------------
// GUESTBOOK
// -----------------------------

const submitWish = document.getElementById("submitWish");
const guestEntries = document.getElementById("guestEntries");

let totalEntries = 0;

submitWish.addEventListener("click", function () {

    const name = document.getElementById("guestName").value.trim();
    const message = document.getElementById("guestMessage").value.trim();
    const sticker = document.getElementById("sticker").value;

    if (name === "" || message === "") {
        alert("Please enter your name and birthday wish!");
        return;
    }

    const card = document.createElement("div");
    card.className = "entry";

    card.innerHTML = `
        <h3>${name}</h3>
        <p>${message}</p>
        <span>${sticker}</span>
    `;

    guestEntries.prepend(card);

    totalEntries++;

    document.getElementById("guestName").value = "";
    document.getElementById("guestMessage").value = "";

    confetti({
        particleCount: 120,
        spread: 100
    });

    if (totalEntries >= 10) {
        startFireworks();
    }

});

// -----------------------------
// FIREWORKS
// -----------------------------

function startFireworks() {

    alert("🎆 Congratulations! 10 wishes reached! 🎉");

    const duration = 8000;

    const end = Date.now() + duration;

    const timer = setInterval(function(){

        confetti({

            particleCount:15,

            spread:360,

            startVelocity:60,

            gravity:0.6,

            origin:{
                x:Math.random(),
                y:Math.random()*0.5
            }

        });

        if(Date.now()>end){

            clearInterval(timer);

        }

    },180);

}

// -----------------------------
// MUSIC
// -----------------------------

const music = document.getElementById("birthdaySong");

document.body.addEventListener("click", function(){

    music.play().catch(()=>{});

}, { once:true });

// -----------------------------
// GALLERY IMAGE PREVIEW
// -----------------------------

gallery.addEventListener("click", function(e){

    if(e.target.tagName==="IMG"){

        const overlay = document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.top="0";
        overlay.style.left="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,.85)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.cursor="pointer";
        overlay.style.zIndex="9999";

        const image = document.createElement("img");

        image.src = e.target.src;

        image.style.maxWidth="90%";
        image.style.maxHeight="90%";
        image.style.borderRadius="20px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.onclick = function(){

            overlay.remove();

        }

    }

});

// -----------------------------
// OPTIONAL MICROPHONE BLOW
// -----------------------------

if (navigator.mediaDevices) {

    console.log("Microphone supported.");

    // Placeholder for future microphone blow detection.

}

// -----------------------------
// FLOATING CONFETTI EVERY 30s
// -----------------------------

setInterval(function(){

    confetti({

        particleCount:80,

        spread:120,

        origin:{
            y:0
        }

    });

},30000);

// -----------------------------
// FINAL MESSAGE
// -----------------------------

console.log("🎂 Happy Birthday Website Loaded Successfully!");

const bgMusic = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    bgMusic.play().catch(err => console.log(err));
}, { once: true });