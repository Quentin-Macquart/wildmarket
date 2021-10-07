// -------------------------------------------------Logo-color

const wildLogo = document.querySelectorAll('.containIntro img');

wildLogo.forEach(element => {

  element.addEventListener('click', function(){

    if(this.src.includes('wild2')){
      this.src = '/assets/NBwild.png';
        } else{
          this.src = '/assets/wild2.png';
        };
    });
});



// -------------------------------------------------Typing effect 
const prizeContain = document.querySelector('.prizeContain');
const prizes1 = document.createElement('p');
prizes1.innerText = "Stickers - Mugs -  Github licenses -  Free lessons - Computer";
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

// lottery();
// console.log(givenGifts);



// comment voir son cadeau ? -> Cliquer (add event listener)
// Pour chaque clickbutton je dois afficher le cadeau (popup ou texte?)
// afficher le nombre de cadeaux restants après le click(donc la array.length)
// Une fois qu'il n'y a plus de cadeaux afficher "there's no more prices"

const giftContain = document.querySelector('.giftContain');
const releasedGifts = document.createElement('div');
releasedGifts.classList.add("gift");
giftContain.appendChild(releasedGifts);
const button = document.querySelector('.button');
button.style.cursor = "pointer";
//releasedGifts.innerText = givenGifts;


button.addEventListener('click', function(){
  if(gifts.length > 0){
  lottery();
  releasedGifts.innerText = "Congradulations for your drop : " + givenGifts;
  givenGifts.pop();
} else {
    alert("Sorry, there is no more price to pick :(")
  }
});
