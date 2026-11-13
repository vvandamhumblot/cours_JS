alert("je suis le script 2")
let maDiv1 ;
maDiv1 = document.getElementById("test")
maDiv1.innerHTML = "je suis la div modifiée par script2.js"
maDiv1.classList.add('test')

let maListeDeDivUn = document.getElementsByClassName("un");
maListeDeDivUn[0].classList.add('test');