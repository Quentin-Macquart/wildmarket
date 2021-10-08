// -------------------------------------------------Logo-color

const wildLogo = document.querySelectorAll('.containIntro img');

wildLogo.forEach(element => {

  element.addEventListener('click', function(){

    if(this.src.includes('wild2')){
      this.src = './assets/NBwild.png';
        } else{
          this.src = './assets/wild2.png';
        };
    });
});



// -------------------------------------------------Typing effect 

const prizeContain = document.querySelector('.prizeContain');
const prizes1 = document.createElement('p');
prizes1.classList.add("prizes1")
prizes1.innerText = "Stickers 🌁  - Mugs ♨️  -  Github licenses 🐱 -  Free lessons 📗 - Computer 💻 ";
prizeContain.appendChild(prizes1);
// prizes1.style.display = 'none';

function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";
    
    let i = 0;
    const timer = setInterval(function() {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  
  
  // ------------------------------------------------application
  const speed = 75;
//   const prizes = document.querySelector('.prizes');
  const delay = prizes1.innerHTML.length * speed + speed;
  
//   typeEffect(prizes, speed);
  


wildLogo.forEach(element => {

  element.addEventListener('click', function(){

    if(this.src.includes('wild2')){
      prizes1.style.display = 'inline';
      typeEffect(prizes1, speed);
    };
  });
});


//----------------------------------------------------Lottery


const gifts = ["Stickers","Stickers","Stickers","Stickers","Stickers","Stickers", "Stickers", "Stickers", "Stickers",
"Stickers", "Stickers", "Stickers", "Stickers", "Stickers", "Stickers", "Stickers", "Stickers", "Stickers", 
"Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs", "Mugs",
 "Mugs", "Mugs", "Mugs", "Github license", "Github license","Github license","Github license","Github license",
 "Github license","Github license","Github license","Github license","Github license", "Free lessons", "Free lessons",
 "Free lessons", "Computer"];

const givenGifts = [];

const lottery = () => {
  let number = 0; 
  number = Math.floor(Math.random() * gifts.length);
  givenGifts.push(gifts[number]);
  gifts.splice(number, 1);
}


// How can i see my gift?  -> Clicking ->  (addeventistener)
// If there is stil gift, ouput the gift -> (condition)
// Let's see the rest to pick  -> (so array.length)
// Ouput "there's no more prices" if there is no more gifts

const giftContain = document.querySelector('.giftContain');
const releasedGifts = document.createElement('div');
releasedGifts.classList.add("gift");
giftContain.appendChild(releasedGifts);

const button = document.querySelector('.button');
button.style.cursor = "pointer";


const left = document.createElement("div");
left.classList.add("left");
const leftGifts = document.querySelector('.leftGifts');
leftGifts.appendChild(left);


button.addEventListener('click', function(){
  if(gifts.length > 0){
  left.innerText = "Left to pick :" + parseInt(gifts.length -1);
  lottery();
  releasedGifts.innerText = "Congradulations for your drop : " + givenGifts;
  givenGifts.pop();
} else {
    alert("Sorry, there is no more price to pick : (")
  }
});

//------------------------Bouton Try it!

const containerSlot = document.querySelector(".slot");
const emojis = ["🌁 ", " ♨️",  "🐱", "📗", "💻", "🎁" ];

button.addEventListener("click", fiesta);

function fiesta() {
  
  if(isTweening()) return;

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    containerSlot.appendChild(confetti);
  }

  animateConfettis();
}

function animateConfettis() {
  
  const TLCONF = gsap.timeline();

  TLCONF.to(".slot div", {
    y: "random(-100,100)",
    x: "random(-100,80)",
    z: "random(0,1000)",
    rotation: "random(-90,90)",
    duration: 1,
  })
    .to(".slot div", { autoAlpha: 0, duration: 0.3 }, "-=0.2")
    .add(() => {
      containerSlot.innerHTML = "";
    });
}

function isTweening(){
  return gsap.isTweening('.slot div');
}