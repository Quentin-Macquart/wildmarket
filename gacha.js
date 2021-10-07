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

// const gift = ["Stickers","Stickers","Stickers","Stickers",];

// totalStudent = student.length;
// let j = 0;
// let number = 0; 
 
// function groupMaker(groupName, iteratorLimit){
//     while(j < iteratorLimit) {
//         number = Math.floor(Math.random() * student.length);
//         groupName.push(student[number]);
//         student.splice(number, 1);
//         j++;
//     }
// }