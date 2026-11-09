function factoriel() {
    var resultat = n;
    for (let i = 1; i <= n; i++) {
        resultat += i;
        console.log(resultat);
    }
    return resultat;
}

var n = parseInt(prompt("veuillez saisir une valeur"));
let valeur_final = factoriel();

alert("le résultat est de " + valeur_final);