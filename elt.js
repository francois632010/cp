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

  let addAZone = (st, rank) => {
    console.log(st + " au rang : " + rank);
    let newZone = buildElt('textArea', "", [`t${rank}`]);
    newZone.value = st;
    
    document.getElementsByTagName('form')[0].appendChild(newZone);

    let testZone = new Zone(["a", `a${rank}`], ['t', `t${rank}`], ['cp__btn', `cp__btn${rank}`])
    console.log(testZone)

  }
  
  
  window.elt = {
    addAZone: addAZone 
  }
  
  
})();
