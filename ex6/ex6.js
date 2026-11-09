function factoriel(n) {
    let resultat = n;
    for (let i = 1; i <= n; i++) {
        resultat += i;
        console.log(resultat);
    }
    return resultat;
}

let n = parseInt(prompt("veuillez saisir une valeur"));

let resultat = n;

for (let i = 1; i <= n; i++) {
  resultat += i;
  console.log(resultat);
}

alert("le résultat est de " + resultat);