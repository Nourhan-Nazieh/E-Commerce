
var $grid = $('.product-list').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});




// dark & light mood

let body = document.querySelector ("body")
let home = document.querySelector (".home")
let card = document.querySelectorAll (".card")
let btn = document.querySelector (".lightMood ")



btn.onclick = function(){

  body.classList.toggle("dark-black")       
  home.classList.toggle("dark-home")
 
  for(let i=0 ; i < card.length; i++ ){
      card [i].classList.toggle("dark-card");   
  }

  if(!body.classList.contains(`dark-black`)){
    btn.classList.replace(`btn-dark`, `btn-light`)
    btn.innerHTML = `<span>&#9790;</span> Dark`; 
    
   }else{
    btn.classList.replace(`btn-dark`, `btn-light`)
    btn.innerHTML = `<span>&#9788;</span> Light`;

   }

}
