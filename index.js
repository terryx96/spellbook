const button = document.querySelector('form')
const submitButton = document.querySelector("#submitButton");
const inputField = document.querySelector("input");

function changeText(){
        const header = document.querySelectorAll("h1");
        (header[1].textContent == "Spellbook") ?
            header[1].textContent = "Not Spellbook" : 
            header[1].textContent = "Spellbook";
}

function submit(ev){
    ev.preventDefault();
    const thirdHeader = document.querySelector("#spells");
    let typedText = document.querySelector("input").value;
    thirdHeader.innerHTML += `<li>${typedText}</li>`
    typedText.value = "";
    button.reset();
}

button.addEventListener("submit", submit)

//literals are bare values, so 4 or "hello"

//to pull a previous git version open git log, note the git hash or git reset a few commits 
//git reset (unstage)     git reset HEAD~# undoes # commits

//Undo a commit if you want to change a commit message
//git commit --ammend takes previous commit and lets you change commit message


//Disregard all below
/*

button.addEventListener("click", changeText);
submitButton.addEventListener("click", submit);

inputField.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        submitButton.click();
    }
})

const formText = document.querySelector("#formInput");
const formButton = document.querySelector("#formButton");
function formSubmit(event){
    event.preventDefault();
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

*/