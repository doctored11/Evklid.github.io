let card = document.querySelectorAll(".card--pink");
let cardHeading = document.querySelectorAll(".card__heading");

let logo = document.querySelectorAll(".card__logo");


// card.forEach(function(){
//   logo.classList.add('а');
// }) ;

card.forEach(function(el){
  el.addEventListener('mouseover', function() {  
    el.childNodes[1].classList.add("up-img");
  })
  el.addEventListener('mouseout', function() { 
    el.childNodes[1].classList.remove("up-img");
  })

})

  
  
  

