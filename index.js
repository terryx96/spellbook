const button = document.querySelector('#change')
const submitButton = document.querySelector("#submitButton");
const inputField = document.querySelector("input");

function changeText(){
        const header = document.querySelectorAll("h1");
        if(header[1].textContent == "Spellbook")
            header[1].textContent = "Not Spellbook";
        else 
            header[1].textContent = "Spellbook";
}

function submit(){
    const thirdHeader = document.querySelectorAll("h1")[2];
    const typedText = document.querySelector("input").value;
    thirdHeader.textContent = typedText;
}


button.addEventListener("click", changeText);
submitButton.addEventListener("click", submit);

inputField.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        submitButton.click();
    }
})