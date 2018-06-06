const form = document.querySelector('form')
const desc = document.querySelector("#description")
const level = document.querySelector("#level")

const changeHeading = function(ev) {
  ev.preventDefault();
  const f = ev.target;
  const spellsDiv = document.querySelector('#spells');
  const node = createLi(f.spellName.value, f.spellDescription.value, f.level.value);
  spellsDiv.appendChild(node);
  f.reset()
}

function createLi(spellName, spellDesc, level){
    const node = document.createElement("LI");
    node.appendChild(createSpan(`${spellName}: `, "name"));
    node.appendChild(createSpan(`${spellDesc}`, "desc"));
    node.appendChild(createSpan(`   Level ${level}`, determineLevel(level)));
    return node;
}

function createSpan(value, id){
    const span = document.createElement("span");
    span.id = id;
    span.textContent = value;
    return span;
}

function determineLevel(level){
    let id = "";
    switch(level){
        case "0": id = "brown"; break;
        case "1": id = "purple"; break;
        case "2": id = "blue"; break;
        case "3": id = "yellow"; break;
        default: id = "rainbow"; break;
    }
    return id;
}

form.addEventListener('submit', changeHeading);