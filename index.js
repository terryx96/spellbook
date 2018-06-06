const form = document.querySelector('form')
const desc = document.querySelector("#description")

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value;
  const spellDesc = desc.value;
  const spellsDiv = document.querySelector('#spells')
  const node = document.createElement("LI");
  const spanName = document.createElement("span")
  const spanDesc = document.createElement("span");
  spanName.id = "name";
  spanDesc.id = "desc"
  spanName.textContent = `${spellName}:`
  spanDesc.textContent = `${spellDesc}`
  node.appendChild(spanName)
  node.appendChild(spanDesc)
  spellsDiv.appendChild(node)


  f.reset()
}

form.addEventListener('submit', changeHeading)



//adding a label to a list: label tag <label for="">NAME</label>
//put the input tag inside the label tag
//html5 attribute: placeholder

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