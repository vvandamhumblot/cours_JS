//alert("Je suis script 2.js");

let maDiv1 ;
maDiv1 = document.getElementById('test');
maDiv1.innerHTML = "Je suis la div modifiée par script2.js";
maDiv1.classList.add('test');

let maListeDeDivUn = document.getElementsByClassName('toto');
//on peut utiliser getElementsByTagName('div') pour récupérer toutes les divs de la page

maListeDeDivUn.forEach(function(element){
    element.classList.add('test');
});

for(let i=0; i<maListeDeDivUn.length; i++){ 
    maListeDeDivUn[i].classList.add('test');
}   