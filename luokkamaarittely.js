// Yliluokka Henkilo
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = new Date(syntymavuosi);
  }

  getIka() {
    const nykyvuosi = new Date().getFullYear();
    return nykyvuosi - this.syntymavuosi.getFullYear();
  }
}

// Aliluokka Urheilija
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    kuva,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this.kuva = kuva;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  get kuva() {
    return this._kuva;
  }
  set kuva(url) {
    if (typeof url === "string" && url.startsWith("http")) {
      this._kuva = url;
    } else {
      throw new Error("Virheellinen URL");
    }
  }

  get omapaino() {
    return this._omapaino;
  }
  set omapaino(paino) {
    if (typeof paino === "number" && paino > 0) {
      this._omapaino = paino;
    } else {
      throw new Error("Virheellinen paino");
    }
  }

  get laji() {
    return this._laji;
  }
  set laji(laji) {
    if (typeof laji === "string" && laji.length > 0) {
      this._laji = laji;
    } else {
      throw new Error("Virheellinen laji");
    }
  }

  get saavutukset() {
    return this._saavutukset;
  }
  set saavutukset(saavutukset) {
    if (Array.isArray(saavutukset)) {
      this._saavutukset = saavutukset;
    } else {
      throw new Error("Saavutusten tulee olla taulukko");
    }
  }
}

// Esimerkkejä Urheilija-olioista
const urheilija1 = new Urheilija(
  "Mika",
  "Matveinen",
  "Maikki",
  "1978-06-15",
  "https://example.com/mikam.jpg",
  90,
  "Näpyttely",
  ["Koodauksen SM-kulta 2015", "Hakkeroinnin EM-hopea 2011"]
);

const urheilija2 = new Urheilija(
  "Mikko",
  "Anttonen",
  "Miki",
  "1968-08-22",
  "https://example.com/mikkoa.jpg",
  85,
  "Näppäily",
  ["SQL-komentojen MM-pronssi 2003", "Tietokantojen SM-kulta 2011"]
);

const urheilija3 = new Urheilija(
  "Eero",
  "Mönkkönen",
  "Mökö",
  "1964-01-22",
  "https://example.com/eerom.jpg",
  80,
  "Spagettikoodari",
  ["COBOLIN EM-pronssi 1993", "Assembly MM-kulta 2000"]
);

console.log(
  `${
    urheilija1.kutsumanimi
  } on ${urheilija1.getIka()} vuotta vanha, hänen lajinsa on ${
    urheilija1.laji
  } ja saavutukset: ${urheilija1.saavutukset}.`
);
console.log(
  `${
    urheilija2.kutsumanimi
  } on ${urheilija2.getIka()} vuotta vanha, hänen lajinsa on ${
    urheilija2.laji
  } ja saavutukset: ${urheilija2.saavutukset}.`
);
console.log(
  `${
    urheilija3.kutsumanimi
  } on ${urheilija3.getIka()} vuotta vanha, hänen lajinsa on ${
    urheilija3.laji
  } ja saavutukset: ${urheilija3.saavutukset}.`
);
