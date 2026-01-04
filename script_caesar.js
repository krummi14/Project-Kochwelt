// function for ceasar.html by mikel nreca
// Basis-Menge für 1 Portion
const basisMenge = {
    eigelb: 0.25,
    senf: 0.25,
    zitronensaft: 0.63,
    worcestershire: 0.25,
    sonnenblumenoel: 1.25,
    salzoben: 0.13,
    pfeffer: 1,
    toast: 1,
    speck: 3,
    haenchen: 100,
    salzunten: 0.5,
    lattich: 0.5,
    gurke: 50,
    sbrinz: 53
};

//Schritt 1: Funktionsname frei definieren zum Festlegen des Funktionsinhaltes
function berechnePortionen() {
    console.log

    //Schritt 2: Anzahl der Portionen aus dem Input-Feld holen
    const portionen = parseFloat(document.getElementById('portionenInput').value) || 1;

    ///Rechnung erstellen
    document.getElementById('eigelb').textContent = (basisMenge.eigelb * portionen);
    document.getElementById('senf').textContent = (basisMenge.senf * portionen);
    document.getElementById('zitronensaft').textContent = (basisMenge.zitronensaft * portionen).toFixed(1);
    document.getElementById('worcestershire').textContent = (basisMenge.worcestershire * portionen);
    document.getElementById('sonnenblumenoel').textContent = (basisMenge.sonnenblumenoel * portionen);
    document.getElementById('salzoben').textContent = (basisMenge.salzoben * portionen);
    document.getElementById('pfeffer').textContent = (basisMenge.pfeffer * portionen);
    document.getElementById('toast').textContent = (basisMenge.toast * portionen);
    document.getElementById('speck').textContent = (basisMenge.speck * portionen);
    document.getElementById('haenchen').textContent = (basisMenge.haenchen * portionen);
    document.getElementById('salzunten').textContent = (basisMenge.salzunten * portionen).toFixed(1);
    document.getElementById('lattich').textContent = (basisMenge.lattich * portionen);
    document.getElementById('gurke').textContent = (basisMenge.gurke * portionen);
    document.getElementById('sbrinz').textContent = (basisMenge.sbrinz * portionen);

}

//Legt die Grenzen fest zwischen einer Portion bis 20 Portionen
function checkWert() {

    let myvalue = document.getElementById("portionenInput").value;

    if (myvalue < 1 || myvalue > 20) {
        document.getElementById('eigelb').textContent = "0.25";
        document.getElementById('senf').textContent = "0.25";
        document.getElementById('zitronensaft').textContent = "0.63";
        document.getElementById('worcestershire').textContent = "0.25";
        document.getElementById('sonnenblumenoel').textContent = "1.25";
        document.getElementById('salzoben').textContent = "0.13";
        document.getElementById('pfeffer').textContent = "1";
        document.getElementById('toast').textContent = "1";
        document.getElementById('speck').textContent = "3";
        document.getElementById('haenchen').textContent = "100";
        document.getElementById('salzunten').textContent = "0.5"
        document.getElementById('lattich').textContent = "0.5";
        document.getElementById('gurke').textContent = "50";
        document.getElementById('sbrinz').textContent = "53";
    

        console.log("Wert ist nicht ok")

    }
    else {

        console.log("Wert ist ok")

    }
}
//Schritt 3: Event Listener für den Button  --> Button reagiert auf den klick und rechnet die funktion *berechnePortionen* aus (Schritt 1)
//portionenButton muss als Id innerhalb des button tags stehen// 
document.getElementById('portionenButton').addEventListener('click', berechnePortionen);
document.getElementById('portionenButton').addEventListener('click', checkWert);