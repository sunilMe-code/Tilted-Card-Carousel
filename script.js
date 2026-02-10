let cards = document.querySelectorAll(".card");
let index = 1;
function updateSlider() {
   cards.forEach(card => {
       card.classList.remove("active","left","right");
   })

   cards[index].classList.add("active")

   if(cards[index - 1]){
       cards[index - 1].classList.add("left");
   }

   if(cards[index + 1]) {
    cards[index + 1].classList.add("right")
   }
}

function prev() {
index++;
console.log(index)
if(index >= cards.length) index = 0;
updateSlider();
}

function next() {
  index--;
  console.log(index)
  if(index < 0) index = cards.length - 1;
  updateSlider();
}

updateSlider();
