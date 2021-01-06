var uitkomst; // Declaratie is genoeg, initialisatie is nog niet nodig
var ChoicePC; // Declaratie is genoeg, initialisatie is nog niet nodig

function schaar() {
  uitkomst = "Je keuze is schaar!";

  document.getElementById("choice").innerText = uitkomst;

  var randomGetal = Math.floor(Math.random() * 3) + 1;

  switch (randomGetal) {
    case 1:
      document.getElementById("uitkomst").innerText =
        "De computer kiest ook schaar dus het is gelijk.";
      break; // Als ge dit ni schrijf gaat die ook case 2 enz. uitvoeren
    case 2:
      document.getElementById("uitkomst").innerText =
        "De computer kiest steen, je verliest.";
      break;
    case 3:
      document.getElementById("uitkomst").innerText =
        "De computer kiest papier, je wint!";
  }
}

function steen() {
  uitkomst = "Je keuze is steen!";

  document.getElementById("choice").innerText = uitkomst;

  var randomGetal = Math.floor(Math.random() * 3) + 1;

  switch (randomGetal) {
    case 1:
      document.getElementById("uitkomst").innerText =
        "De computer kiest schaar dus je wint!";
      break; // Als ge dit ni schrijf gaat die ook case 2 enz. uitvoeren
    case 2:
      document.getElementById("uitkomst").innerText =
        "De computer kiest ook steen dus het is gelijk.";
      break;
    case 3:
      document.getElementById("uitkomst").innerText =
        "De computer kiest papier, je verliest.";
  }
}

function papier() {
  uitkomst = "Je keuze is papier!";

  document.getElementById("choice").innerText = uitkomst;

  var randomGetal = Math.floor(Math.random() * 3) + 1;

  switch (randomGetal) {
    case 1:
      document.getElementById("uitkomst").innerText =
        "De computer kiest schaar dus je verliest.";
      break; // Als ge dit ni schrijf gaat die ook case 2 enz. uitvoeren
    case 2:
      document.getElementById("uitkomst").innerText =
        "De computer kiest steen, je wint!";
      break;
    case 3:
      document.getElementById("uitkomst").innerText =
        "De computer kiest papier, je verliest.";
  }
}
