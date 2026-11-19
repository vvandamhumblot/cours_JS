var MaDiv = document.getElementsByName("MaDiv1");

function ModifText(MaDiv) {
    alert("modif de la div en cours")
}

for(let i = 0; i < 3; i++ ) {
    ModifText("hello")
    MaDiv.innerHTML = "hello"
};