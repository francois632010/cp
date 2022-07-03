(function () {

  function Zone (artCl = [], txtCl = [], cp = []) {
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
            }
          ]
        }
      ]
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
  		console.log( inner)
  		//newElt.innerHTML = 'HEY HEY';
  		father.appendChild(newElt);
  		
  		if (elt.sub) downOnZone(elt.sub, newElt);
  		
  		
  	}
  }

  let addAZone = (st, rank) => {
  
  	let newZone = new Zone(["a", `a${rank}`], ['t', `t${rank}`], ['cp__btn', `cp__btn${rank}`]);
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
