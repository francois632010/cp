let initPourProd = () => {
  sessionStorage.setItem("0", "ho ho ho");
  sessionStorage.setItem("1", "c'est le père noël !!!");
  sessionStorage.setItem("2", "hello world !!!");
}
let init2 = () => {
	localStorage.setItem("0", "ho pla");
	localStorage.setItem("1", "Boum !!!");
	}
let build = (datas = []) => {
  if (datas.length > 0) {
    document.getElementsByTagName('form')[0].removeChild(document.getElementsByTagName('article')[0]);
    for (let i = 0; i < datas.length; i++) {
    	elt.addAZone(datas[i], i);
    	document.getElementsByTagName('textArea')[i].innerHTML = datas[i];
    }
    
  }
}
//fonction listen sur tous les contrôles
//si un contrôle est activé --> on affiche les contrôle et on lance une fonction listen sur tous les sous contrôle

//initPourProd();
//init2();

//lancer build avec session si session>0 sinon local si local == 0 on ne fait rien
let sessionOrLocal = () => {
	if (sessionStorage.length > 0) return true;
	if (localStorage.length > 0) return false;
	
	return "no-response";
}
build(reg.getStorageTab(sessionOrLocal()));
