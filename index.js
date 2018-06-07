const app = {
    
    init: function(){
        this.spellArr = [];

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

        f.reset();
        },

    createItem: function(spell){
        const node = document.createElement("li");
        node.classList.add("spell");
        const attributes = Object.keys(spell);
            attributes.forEach(att => {
                node.appendChild(this.createSpan(att, spell[att]));
            })
        return node;
        },
    
    createSpan: function(id, value){
        const spanNode = document.createElement("span");
        spanNode.classList.add(id);
        spanNode.textContent = value;
        return spanNode;
    }

    
}

 
app.init();

