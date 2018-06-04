const button = document.querySelector('button')

function changeText(){
    const header = document.querySelector("h1");
    header.textContent = "Not Spellbook";
}

button.addEventListener("click", changeText);