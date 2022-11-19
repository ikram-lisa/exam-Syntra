function Schilderij(naam, canvasgrootte, kostprijs) {
  this.naam = naam;
  this.canvasgrootte = canvasgrootte;
  this.kostprijs = kostprijs;
}
function Schilder(voornaam, achternaam, stijl) {
  this.voornaam = voornaam;
  this.achternaam = achternaam;
  this.stijl = stijl;
  this.listSchilderijen = [];
}
Schilder.prototype.add = function (naam, canvasgrootte, kostprijs) {
  this.listSchilderijen.push(new Schilderij(naam, canvasgrootte, kostprijs));
};

const schilder = new Schilder("Vincent", "van Gogh", "Postimpressionisme");

schilder.add("Zonnebloemen", "123x72", "39.921.750 €");

schilder.add("De aardappeleters", "82x114", "21.152.154 €");
schilder.add("Slaapkamer te Arles", "61x81", "19.127.784 €");
// schilder.delete("De aardappeleters", "82x114", "21.152.154 €");
for (let i = 0; i < schilder.listSchilderijen.length; i++) {
  console.log(
    `De naam van schilderij is ${schilder.listSchilderijen[i].naam} met Canva groote ${schilder.listSchilderijen[i].canvasgrootte} en het prijs ${schilder.listSchilderijen[i].kostprijs}`
  );

  let totalWith = schilder.listSchilderijen[i].canvasgrootte;
  totalWith++;
}

console.log(schilder);
