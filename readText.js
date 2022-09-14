(function() {

    let getText = plainText => {
        console.log(plainText.match(/::[a-z|A-Z|0-9]*::/g))
        let rgxs = plainText.match(/::[a-z|A-Z|0-9]*::/g);
        let newText = "";
        if (rgxs) {
            for (let fct of rgxs) console.log (fct.match(/[a-z|A-Z]*/g)[2])
        }
        return plainText;
    }

    window.readText = {
        getText: getText
    }


})();
