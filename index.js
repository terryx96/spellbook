class App {
    constructor(){
        this.spellArr = [];
        this.page = document.querySelector("#spells");
        const form = document.querySelector('form');
        this.load();
        form.addEventListener('submit', ev => {
            this.onSubmit(ev);
        })}

    onSubmit(ev){
        ev.preventDefault();
        const f = ev.target;
        const spell = {
            name: f.spellName.value,
            desc: f.spellDescription.value,
            level: f.level.value,
            favorite: false,
        }
        this.addSpell(spell);
        f.reset();
    }

    addSpell(spell){
        const spellsList = document.querySelector("ul#spells");
        this.spellArr.push(spell);
        const item = this.createItem(spell);
        spellsList.appendChild(item)
        this.save();
       
        }

    createItem(spell){
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
        }
    
    createSpan(id, value){
        const spanNode = document.createElement("span");
        spanNode.classList.add(id);
        spanNode.contentEditable = true;
        spanNode.textContent = `${value} `;
        return spanNode;
    }

    deleteButton(spell){
        const del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete")
        const i = this.spellArr.indexOf(spell);
        del.addEventListener("click", this.deleteSpell.bind(this, spell));

        return del;
    }

    deleteSpell(spell, ev){
        const f = ev.target;
        f.parentNode.remove();
        const i = this.spellArr.indexOf(spell);
        this.spellArr.splice(i, 1)
    }

    upButton(spell){
        const up = document.createElement("button");
        up.textContent = "Up";
        up.classList.add("move");
        up.addEventListener("click", this.moveUp.bind(this, spell));
        return up;
    }

    moveUp(spell, ev){
        const f = ev.target;
        const item = f.closest(".spell");

        const i = this.spellArr.indexOf(spell)
        if(i > 0){
            const temp = this.spellArr[i-1];
            this.spellArr[i-1] = this.spellArr[i]
            this.spellArr[i] = temp;
            this.page.insertBefore(item, item.previousSibling);
        }
    }

    downButton(spell){
        const down = document.createElement("button");
        down.textContent = "Down";
        down.classList.add("move")
        down.addEventListener("click", this.moveDown.bind(this, spell));
        return down;
    }

    moveDown(spell, ev){
        const f = ev.target;
        const item = f.closest(".spell");

        const i = this.spellArr.indexOf(spell)
        if(i < this.spellArr.length-1){
            const temp = this.spellArr[i+1];
            this.spellArr[i+1] = this.spellArr[i]
            this.spellArr[i] = temp;
            this.page.insertBefore(item.nextSibling, item);
        }
    }

    faveButton(spell){
        const fave = document.createElement("button");
        fave.textContent = "Fave";
        fave.classList.add("fav");
        fave.addEventListener("click", this.toggleFave.bind(this, spell));
        return fave;
    }

    toggleFave(spell, ev){
        const f = ev.target;
        const item = f.closest(".spell");
        spell.favorite = !spell.favorite;
        if(spell.favorite){
            item.classList.add("fave");
        }
        else{
            item.classList.remove("fave");
        }
    }

    save(){
        localStorage.setItem("spells", JSON.stringify(this.spellArr));
    }

    load(){
        const stored = localStorage.getItem("spells")
        const arr = JSON.parse(stored);
        console.log(arr)
        arr.forEach(this.addSpell.bind(this));
    }
}

const app = new App()


