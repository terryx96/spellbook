const button = document.querySelector('#change')
const submitButton = document.querySelector("#submitButton");

function changeText(){
    const header = document.querySelectorAll("h1");
    header[1].textContent = "Not Spellbook";
}

function submit(){
    const thirdHeader = document.querySelectorAll("h1")[2];
    const typedText = document.querySelector("input").value;
    thirdHeader.textContent = typedText;
}

button.addEventListener("click", changeText);
submitButton.addEventListener("click", submit);
