let build = ([...datas] = []) => {
	
  if (datas.length > 0) {
    document.getElementsByTagName('form')[0].removeChild(document.getElementsByTagName('article')[0]);
    for (let i = 0; i < datas.length; i++) {
		readText.getText(datas[i]);
    	elt.addAZone(datas[i], i);
    	document.getElementsByClassName(`t${i}`)[0].innerHTML = datas[i];
    }
    
  }
  if (!sessionOrLocal()) reg.reg();
}
let init = () => {
	if (sessionStorage.length > 0) console.log('session');
	if (localStorage.length > 0 && sessionStorage.length == 0) console.log('local');
	if (localStorage.length == 0 && sessionStorage.length == 0) reg.regAZone(0, 'Welcoooooome !!!!!');
}
let sessionOrLocal = () => {
	if (sessionStorage.length > 0) return true;
	if (localStorage.length > 0) return false;
	
	return "no-response";
}
build(reg.getStorageTab(sessionOrLocal()));

let listenAd = rank => {
	let rk = parseInt(rank) + 1;
	document.getElementsByClassName(`ad__btn${rank}`)[0].addEventListener('click', () => {
		reg.addAZone(rk, `zone N° ${rk}`);		
		
		window.location.reload();
	}, false);
}
let listenSuppr = rank => {
	document.getElementsByClassName(`suppr__btn${rank}`)[0].addEventListener('click', () => {
		reg.supprAZone(rank);
		window.location.reload();
	},false);
}
let listenCtrls = () => {
	let ctrls = document.getElementsByClassName('ctrl__btn');
	for (let ctrl of ctrls) {
		ctrl.addEventListener('click', (e) => {
			// ligne suivante peut etre supprimer car on passe au sessionStorage
			// ou alors on continue avec tous en reg la dans session afin d'éviter les rechargements
			// il faut essayer d'ajouter un bouton en écoute à chaque fois que l'on ajoute une zone
			let rank = Array.from(e.target.classList).filter(elt => (/ctrl__btn[0-9]+/).test(elt))[0].slice(9);
			let cl = document.getElementsByClassName(`ctrls__btn${rank}`)[0].classList;
			if (cl.contains('no-visible')) {
				cl.remove('no-visible');
				
				listenAd(rank);
				listenSuppr(rank);

				}else if (!cl.contains('no-visible')) {
					
					cl.add('no-visible');
					window.location.reload();
				}
		});
	}
}
let listenReg = () => {
	document.getElementById('reg__btn').addEventListener('click',() => {
		reg.reg(false)
	})
}
let listenFctNew = () => {
	document.getElementById('fct-new__btn').addEventListener('click', () => {
		document.getElementById('fct-choice').classList.remove('no-visible');
	})
}
let listenFct = () => {
	document.getElementById('menu-fct__btn').addEventListener('click', () => {
		let menuFctSubs = document.querySelectorAll('#menu-fct__btn div');
		for (item of menuFctSubs) {
			console.log(item.classList.contains('no-visible'));
			if (item.classList.contains('no-visible')) {
				item.classList.remove('no-visible');
				listenFctNew();
			} else if (!item.classList.contains('no-visible')) {
				item.classList.add('no-visible');
			}
		}
	})
}
let listenCps = () => {
	let cps = document.getElementsByClassName('cp__btn');
	for (let cp of cps) {
		cp.addEventListener('click', (e) => {
			let rank = Array.from(e.target.classList).filter(elt => (/cp__btn[0-9]+/).test(elt))[0].slice(7);
			let readingText = document.getElementsByClassName(`t${rank}`)[0].value;
			let cpText = readText.getText(readingText);
			//let val = document.getElementsByClassName(`t${rank}`)[0].value;
			if (navigator.clipboard) {
				navigator.clipboard.writeText(cpText);
			  }
			//document.getElementsByClassName(`t${rank}`)[0].select();
			//document.execCommand('copy');
		});
	}
}
let listenTs = () => {
	let ts = document.getElementsByClassName('t');
	for (let t of ts) {
		t.addEventListener('blur', (e) => {
			console.log(e);
			reg.reg();
		});
	}
}
/*
let listenChange = () => {
	let ts = document.getElementsByClassName('t');
	
	for (let t of ts) {
		t.addEventListener('change', (e) => {
			let rank = Array.from(e.target.classList).filter(elt => (/t[0-9]+/).test(elt))[0].slice(1);
			
			reg.regAZone(rank, e.target.value);
		})
	}
}
*/
init();
document.addEventListener('change', reg.reg);
listenReg();
listenFct();
listenCtrls();
listenCps();
listenTs();
