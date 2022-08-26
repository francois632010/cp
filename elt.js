(function () {
// il faudra mettre des ... pour les tableaux
// il faudra une fonction d'init dans Zone pour éviter tous les tableaux dans la definition
  function Zone (rank) {
      this.zn = [
        {
          elt: "article",
          sub: [
            {
              elt: "textarea"
            },
            {
              elt: "div",
              inner: 'Copier'
            },
            {
              elt: "div",
              classes: ['ctrl'],
              sub: [
                {
                  elt: 'div',
                  inner: 'Contrôle'
                },
                {
                  elt: 'ul',
                  classes: ['ctrls__btn', 'ctrl__btn0', 'no-visible'],
                  sub: [
                    {
                      elt: 'li',
                      inner: '+++'
                    },
                    {
                      elt: 'li',
                      inner: '---'
                    },
                    {
                    	elt: 'li',
                    	inner: 'test'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
      this.makeClasses = () => {
      	this.zn[0].classes = ['a', `a${rank}`];
      	this.zn[0].sub[0].classes = ['t', `t${rank}`];
      	this.zn[0].sub[1].classes = ['cp__btn', `cp__btn${rank}`];
      	this.zn[0].sub[2].sub[0].classes = ['ctrl__btn', `ctrl__btn${rank}`];
      	this.zn[0].sub[2].sub[1].classes = ['ctrls__btn', `ctrls__btn${rank}`, 'no-visible'];
      	this.zn[0].sub[2].sub[1].sub[0].classes = ['ad__btn',`ad__btn${rank}`];
      	this.zn[0].sub[2].sub[1].sub[1].classes = ['suppr__bt', `suppr__btn${rank}`];
      	this.zn[0].sub[2].sub[1].sub[2].classes = [`test${rank}`];
      	}
  }

  let buildElt = (what, ID, classes = [], inner = "") => {
    let newElt = document.createElement(what);
    if (ID != "") newElt.setAttribute('id', ID);
    if (classes) for (let elt of classes) newElt.classList.add(elt);
    if (inner != "") newElt.innerHTML = inner;

    return newElt;
  }
  let downOnZone = (obj, father) => {
  	for (let elt of obj) {
  	 	let id = "";
  	 	let classes = null;
  	 	let inner = "";
  	 	let newElt = null;
  		if (elt.id) id = elt.id;
  		if (elt.classes) classes = [...elt.classes];
  		if (elt.inner) inner = elt.inner;
  		
  		newElt = buildElt(elt.elt, id, classes, inner);
  		father.appendChild(newElt);
  		
  		if (elt.sub) downOnZone(elt.sub, newElt);
  		
  		
  	}
  }

  let addAZone = (st, rank) => {
  
  	let newZone = new Zone(rank);
  	newZone.makeClasses();
    downOnZone(newZone.zn, document.getElementsByTagName('form')[0]);
  }
  
  
  window.elt = {
    addAZone: addAZone 
  }
  
  
})();
