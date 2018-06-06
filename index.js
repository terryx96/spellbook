const form = document.querySelector('form')
const desc = document.querySelector("#description")

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value;
  const spellDesc = desc.value;
  const spellsDiv = document.querySelector('#spells');
  const node = createLi(spellName, spellDesc);
  spellsDiv.appendChild(node);
  f.reset()
}

function createLi(spellName, spellDesc){
    const node = document.createElement("LI");
    node.appendChild(createSpan(spellName, "name"));
    node.appendChild(createSpan(spellDesc, "desc"));
    return node;
}

function createSpan(value, id){
    const span = document.createElement("span");
    span.id = id;
    span.textContent = value;
    return span;
}

form.addEventListener('submit', changeHeading);