var MaDiv1 = document.getElementById("MaDivNum1");
var MaDiv2 = document.getElementById("MaDivNum2");
var MaDiv3 = document.getElementById("MaDivNum3");

MaDiv1.addEventListener("click", le_clique);
MaDiv2.addEventListener("mouseover", survoler);
MaDiv3.addEventListener("keydown", clavier);

var compteur = 0;
var compteur2 = 0;

function le_clique(evenement) {
    compteur++
    evenement.target.innerHTML = "on m'a cliquer "+ compteur +" fois"
}

function survoler(evenement) {
    compteur2++
    evenement.target.innerHTML = "on m'a survoler "+ compteur2 +" fois"
}

function clavier(evenement) {
    evenement.target.innerHTML = "tu a utilisé la touche  "+ evenement.key;
}
