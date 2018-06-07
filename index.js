

const app = {
    spellArr: [],
    
    init: function(){
        const form = document.querySelector('form')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.addSpell(ev);
            console.log(this.spellArr);
        })},

    addSpell: function(ev) {
        ev.preventDefault();
        const f = ev.target;
        const spellsDiv = document.querySelector('#spells');
        const node = this.createLi(f.spellName.value, f.spellDescription.value, f.level.value);
        const spell = {
            name: f.spellName.value,
            description: f.spellDescription.value,
            spellLevel: f.level.value,
        }
        this.spellArr.push(spell);
        spellsDiv.appendChild(node);
        f.reset()
      },

    createLi: function(spellName, spellDesc, level){
        const node = document.createElement("li");
        node.classList.add("inline")
        node.appendChild(this.createSpan(`${spellName}: `, "name"));
        node.appendChild(this.createSpan(`${spellDesc}`, "desc"));
        node.appendChild(this.createSpan(`Level ${level}`, this.determineLevel(level)));
        node.appendChild(this.deleteButton());
        return node;
    },

    createSpan: function(value, id){
        const span = document.createElement("span");
        span.setAttribute("id", id);
        span.textContent = value;
        return span;
    },

    determineLevel: function(level){
        let id = "";
        switch(level){
            case "0": id = "brown"; break;
            case "1": id = "purple"; break;
            case "2": id = "blue"; break;
            case "3": id = "yellow"; break;
            default: id = "rainbow"; break;
        }
        return id;
    },

    deleteButton: () => {
        const del = document.createElement("input");
        del.setAttribute("type", "submit");
        del.setAttribute("value", "Delete");
        del.onclick = function(){
           del.parentNode.parentNode.removeChild(del.parentNode)
           app.spellArr.splice(app.spellArr.indexOf(del.parentNode), 1);
            
        }
        return del;
    }
}



app.init();




