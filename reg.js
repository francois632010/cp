(function() {

    let getStorageTab = (session = true) => {
        /*
            retourne un tableau des items du storage ordonné en fonction des clefs
            ne prend en compte que les clefs \[0-9]*+\

        */
        let storages = null;

        if (session) storages = Object.entries(sessionStorage);
        if (!session) storages = Object.entries(localStorage);
        
        return storages.filter(item => parseInt(item[0]) || item[0] == 0).sort((a, b) => a[0] - b[0]).map(elt => elt[1]);

    };

    let addAZone = (rank=0, st = "", session = true) => {
    //supprime le session ? --> oui car cela se passe forcement dans la session
        let tab = getStorageTab(session);
        if (tab.length == 1) regAZone(1, st)
        if (tab.length > 1) for (let i = tab.length - 1; i >= rank; i--) {
            regAZone(i + 1, sessionStorage.getItem(i));
            if (i == rank) regAZone(rank, "")
        }
        if (tab.length == rank) regAZone(rank, "der")
        
        console.log(tab.length)
    };
	let supprAZone = rank => {
		console.log('supprAZone au rank : ' + rank);
		
	}
    let regAZone = (rank, st = "", session = true) => {
        if (session) sessionStorage.setItem(rank, st);
        if (!session) localStorage.setItem(rank, st);
    };

    let reg = () => {
        // fct de transition sera modifiée aprés
        let t = document.getElementsByClassName('t');
        //console.log(t[1].innerHTML)
        //alert();
        sessionStorage.clear();
        for (let i = 0; i < t.length; i++) {
            //alert(t[i].value)
            regAZone(i, t[i].value);
        }
        
        console.log(sessionStorage)
    }

    window.reg = {
        getStorageTab: getStorageTab,
        addAZone: addAZone,
        supprAZone: supprAZone,
        regAZone: regAZone,
        reg: reg
    }


})();
