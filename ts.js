function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamTomb) {
    var parosDb = 0;
    for (var i = 0; i < szamTomb.length; i++) {
        if (szamTomb[i] % 2 === 0) {
            parosDb++;
        }
    }
    return parosDb;
}
