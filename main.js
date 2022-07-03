let initPourProd = () => {
  sessionStorage.setItem("0", "ho ho ho");
  sessionStorage.setItem("1", "c'est le père noël !!!");
  sessionStorage.setItem("2", "hello world !!!");
}

let build = (datas = []) => {
  if (datas.length > 0) {
    document.getElementsByTagName('form')[0].removeChild(document.getElementsByTagName('article')[0]);
    for (let i = 0; i < datas.length; i++) {
    	elt.addAZone(datas[i], i);
    	document.getElementsByTagName('textArea')[i].innerHTML = sessionStorage.getItem(i);
    }
    
  }
}

initPourProd();
console.log(reg.getStorageTab(true))
build(reg.getStorageTab(true));
