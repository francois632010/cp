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
              classes: cp
            }
          ]
        }
      ]
  }

  let buildElt = (what, ID, classes = []) => {
    let newElt = document.createElement(what);
    if (ID != "") newElt.setAttribute('id', ID);
    if (classes.length > 0) for (let elt of classes) newElt.classList.add(elt);

    return newElt;
  }
  let downOnZone = (obj, father) => {
  	for (let elt of obj) {
  	 	let id = "";
  	 	let classes = null;
  	 	let newElt = null;
  		console.log(elt);
  		if (elt.id) id = elt.id;
  		if (elt.classes) classes = [...elt.classes];
  		
  		console.log(id)
  		console.log(classes)
  		newElt = buildElt(elt.elt, id, classes);
  		console.log(newElt);
  		newElt.innerHTML = 'HEY HEY';
  		father.appendChild(newElt);
  		console.log('Je suis ton père');
  		console.log(document.getElementsByTagName(elt.elt)[obj.indexOf(elt)]);
  		if (elt.sub) downOnZone(elt.sub, document.getElementsByTagName(elt.elt)[obj.indexOf(elt)]);
  		
  		
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
