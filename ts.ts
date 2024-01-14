function osszesOszto(szam: number): number[] {
    var osztok: number[] = [];

    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }

    return osztok;
}

function parosDarab(szamTomb: number[]): number {
    var parosDb = 0;

    for (var i = 0; i < szamTomb.length; i++) {
        if (szamTomb[i] % 2 === 0) {
            parosDb++;
        }
    }

    return parosDb;
}
