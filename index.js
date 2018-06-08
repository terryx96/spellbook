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
            favorite: false,
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
                if(att!="favorite"){
                node.appendChild(this.createSpan(att, spell[att]));
                }
            })
        node.appendChild(this.deleteButton(spell));
        node.appendChild(this.upButton(spell));
        node.appendChild(this.downButton(spell))
        node.appendChild(this.faveButton(spell))
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
        del.classList.add("delete")
        const i = this.spellArr.indexOf(spell);
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
        up.classList.add("move");
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
        down.classList.add("move")
        down.addEventListener("click", this.moveDown.bind(this, spell));
        return down;
    },

    moveDown: function(spell, ev){
        const f = ev.target;
        const item = f.closest(".spell");

        const i = this.spellArr.indexOf(spell)
        if(i < this.spellArr.length-1){
            const temp = this.spellArr[i+1];
            this.spellArr[i+1] = this.spellArr[i]
            this.spellArr[i] = temp;
            this.page.insertBefore(item.nextSibling, item);
        }
    },

    faveButton: function(spell){
        const fave = document.createElement("button");
        fave.textContent = "Fave";
        fave.classList.add("fav");
        fave.addEventListener("click", this.toggleFave.bind(this, spell));
        return fave;
    },

    toggleFave: function(spell, ev){
        const f = ev.target;
        const item = f.closest(".spell");
        spell.favorite = !spell.favorite;
        if(spell.favorite){
            item.classList.add("fave");
        }
        else{
            item.classList.remove("fave");
        }
    },

    
}

 
app.init();

