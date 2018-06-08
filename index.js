const app = {
    
    init: function(){
        this.spellArr = [];
        this.page = document.querySelector("#spells")
        const form = document.querySelector('form')
        form.addEventListener('submit', (ev) => {
            this.addSpell(ev);
        })},

    addSpell: function(ev){
        ev.preventDefault();
        const spellsList = document.querySelector("ul#spells");
        console.log(spellsList)
        const f = ev.target;
        const spell = {
            name: f.spellName.value,
            desc: f.spellDescription.value,
            level: f.level.value,
        }
        this.spellArr.push(spell);
        
        const item = this.createItem(spell);
        spellsList.appendChild(item)
        console.log(this.spellArr)
        f.reset();
        },

    createItem: function(spell){
        const node = document.createElement("li");
        node.classList.add("spell");
        const attributes = Object.keys(spell);
            attributes.forEach(att => {
                node.appendChild(this.createSpan(att, spell[att]));
            })
        node.appendChild(this.deleteButton(spell));
        node.appendChild(this.upButton(spell));
        return node;
        },
    
    createSpan: function(id, value){
        const spanNode = document.createElement("span");
        spanNode.classList.add(id);
        spanNode.textContent = value;
        return spanNode;
    },

    deleteButton: function(spell){
        const del = document.createElement("button");
        del.textContent = "Delete";
        const i = this.spellArr.indexOf(spell);
        //const item = del.closest(".spell");
        del.addEventListener("click", this.deleteSpell.bind(this, spell));

        return del;
    },

    deleteSpell: function(spell, ev){
        const f = ev.target;
        f.parentNode.remove();
        const i = this.spellArr.indexOf(spell);
        this.spellArr.splice(i, 1)
    },

    upButton: function(spell){
        const up = document.createElement("button");
        up.textContent = "Up";
        up.addEventListener("click", this.moveUp.bind(this, spell));
        return up;
    },

    moveUp: function(spell, ev){
        const f = ev.target;
        const item = f.closest(".spell");

        const i = this.spellArr.indexOf(spell)
        if(i > 0){
            const temp = this.spellArr[i-1];
            this.spellArr[i-1] = this.spellArr[i]
            this.spellArr[i] = temp;
            this.page.insertBefore(item, item.previousSibling);
        }
    },

    downButton: function(spell){
        const down = document.createElement("button");
        down.textContent = "Down";
        down.addEventListener("click", this.moveDown.bind(this, spell));
    },

    moveDown: function(spell, ev){
        
    }

    
}

 
app.init();

