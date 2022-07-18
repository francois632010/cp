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
let init = () => {
	localStorage.clear();
	sessionStorage.clear();
	console.log(sessionStorage.length > 0)
	if (sessionStorage.length > 0) console.log('session');
	if (localStorage.length > 0 && sessionStorage.length == 0) console.log('local');
	if (localStorage.length == 0 && sessionStorage.length == 0) reg.regAZone(0, 'Welcoooooome !!!!!');
}

init();
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

let listenAd = rank => {
	let rk = parseInt(rank) + 1;
	document.getElementsByClassName(`ad__btn${rank}`)[0].addEventListener('click', () => {
		reg.regAZone(rk, `zone N° ${rank}`);
		build(reg.getStorageTab(sessionOrLocal()));
		//window.location.reload();
	}, false);
}

let listenCtrls = () => {
	let ctrls = document.getElementsByClassName('ctrl__btn');
	for (let ctrl of ctrls) {
		ctrl.addEventListener('click', (e) => {
			let rank = Array.from(e.target.classList).filter(elt => (/ctrl__btn[0-9]+/).test(elt))[0].slice(9);
			let cl = document.getElementsByClassName(`ctrls__btn${rank}`)[0].classList;
			if (cl.contains('no-visible')) {
				cl.remove('no-visible');
				
				listenAd(rank);
				
				/*
				listenSuppr(rank);
				*/
				}else if (!cl.contains('no-visible')) {
					
					cl.add('no-visible');
					/*
					document.getElementsByClassName(`ad__btn${rank}`)[0].removeEventListener
					*/
				}
		});
	}
}
listenCtrls();
