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

    }

    window.reg = {
        getStorageTab: getStorageTab
    }


})();