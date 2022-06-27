(function () {
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

  }
  
  
  window.elt = {
    addAZone: addAZone 
  }
  
  
})();
