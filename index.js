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

const formText = document.querySelector("#formInput");
const formButton = document.querySelector("#formButton");
function formSubmit(){
    const firstHeader = document.querySelectorAll("h1")[0];
    firstHeader.textContent = formText.value;
}

formButton.addEventListener("click", formSubmit);
formText.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        formButton.click();
    }
})


