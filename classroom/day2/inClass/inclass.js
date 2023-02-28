const h1Tag = document.querySelector("#hID");
const pTag = document.querySelector("#pID");
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");

console.log(h1Tag)
const value = h1Tag.innerHTML;
h1Tag.textContent = "Login"
h1Tag.style.backgroundColor = "red";
h1Tag.style.margin = "20px";
h1Tag.style.fontSize = "50px"
pTag.style.fontFamily = "Papyrus";

btn.addEventListener('click', (event) => {
    console.log(input.value)

} )
