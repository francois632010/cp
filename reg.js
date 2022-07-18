(function() {

    let getStorageTab = (session = true) => {
        /*
            retourne un tableau des items du storage ordonné en fonction des clefs
            ne prend en compte que les clefs \[0-9]*+\

        */
        let storages = null;

        if (session) storages = Object.entries(sessionStorage);
        if (!session) storages = Object.entries(localStorage);


        return storages.filter(item => parseInt(item[0]) || item[0] == 0).sort(item => item[0]).map(elt => elt[1]);

    };

    let adAZone = (rank, session = true) => {
        
    };

    let regAZone = (rank, st = "", session = true) => {
        if (session) sessionStorage.setItem(rank, st);
        if (!session) localStorage.setItem(rank, st);
    }

    window.reg = {
        getStorageTab: getStorageTab,
        adAzone: adAZone,
        regAZone: regAZone
    }


})();