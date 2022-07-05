(function () {
// il faudra mettre des ... pour les tableaux
// il faudra une fonction d'init dans Zone pour éviter tous les tableaux dans la definition
  function Zone (artCl = [], txtCl = [], cp = [], ctrlBtn = [], adBtn = [], supprBtn = []) {
      this.zn = [
        {
          elt: "article",
          classes: artCl,
          sub: [
            {
              elt: "textarea",
              classes: txtCl
            },
            {
              elt: "div",
              classes: cp,
              inner: 'Copier'
            },
            {
              elt: "div",
              classes: ['ctrl'],
              sub: [
                {
                  elt: 'div',
                  classes: ctrlBtn,
                  inner: 'Contrôle'
                },
                {
                  elt: 'ul',
                  classes: ['ctrls__btn', 'no-visible'],
                  sub: [
                    {
                      elt: 'li',
                      classes: adBtn,
                      inner: '+++'
                    },
                    {
                      elt: 'li',
                      classes: supprBtn,
                      inner: '---'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
  }
  Zone.prototype.makeClasses = (rank) => {
    console.log('N° du rang : ' + rank)
    console.log(Zone)
  }

  let buildElt = (what, ID, classes = [], inner = "") => {
    let newElt = document.createElement(what);
    if (ID != "") newElt.setAttribute('id', ID);
    if (classes.length > 0) for (let elt of classes) newElt.classList.add(elt);
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
  		//newElt.innerHTML = 'HEY HEY';
  		father.appendChild(newElt);
  		
  		if (elt.sub) downOnZone(elt.sub, newElt);
  		
  		
  	}
  }

  let addAZone = (st, rank) => {
  
  	let newZone = new Zone(["a", `a${rank}`], ['t', `t${rank}`], ['cp__btn', `cp__btn${rank}`], ['ctrl__btn', `ctrl__btn${rank}`], ['ad__btn',`ad__btn${rank}`], ['suppr__bt', `suppr__btn${rank}`]);
  	newZone.makeClasses(rank);
    downOnZone(newZone.zn, document.getElementsByTagName('form')[0]);
  /*
    console.log(st + " au rang : " + rank);
    let newZone = buildElt('textArea', "", [`t${rank}`]);
    newZone.value = st;
    
    document.getElementsByTagName('form')[0].appendChild(newZone);

    let testZone = new Zone(["a", `a${rank}`], ['t', `t${rank}`], ['cp__btn', `cp__btn${rank}`]);
    console.log(testZone)
*/
  }
  
  
  window.elt = {
    addAZone: addAZone 
  }
  
  
})();
