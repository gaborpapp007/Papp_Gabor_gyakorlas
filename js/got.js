function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    //console.log(userDatas);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
    //az élők;
    var alive = livingCharacters(userDatas);
    var sorted = sortByName(alive);
    console.log(sorted);
}

function livingCharacters(characters) {
    var live = [];
    for (var i in characters) {
        if (!characters[i].dead) {
            live.push(characters[i]);
        }
    }
    return live;
}

function sortByName(characters) {

    //javított bubis
    var i = characters.length - 1;
    var tmp;
    var swap = false;
    do {
        swap = false;
        for (let j = 0; j < i; j++) {
            if (characters[j].name > characters[j + 1].name) {
                tmp = characters[j];
                characters[j] = characters[j + 1];
                characters[j + 1] = tmp;
                swap = true;
            }
        }
        i--;
    } while (i >= 0 && swap)
    return characters;



    /*var rendezetTomb = characters;
    for (var i = rendezetTomb.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (rendezetTomb[j].age > rendezetTomb[j + 1].age) {
                var tmp = rendezetTomb[j];
                rendezetTomb[j] = rendezetTomb[j + 1];
                rendezetTomb[j + 1] = tmp;
            }
        }
    }
    return rendezetTomb;*/

}
// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('/json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */