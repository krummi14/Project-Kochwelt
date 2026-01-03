// function for contact.html, Integration of Formspree and guid to send_mail.html page
// sendMail()
function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xaqynvzw", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}

// function for chili.html by Daniel Krummhauer
// function calculateAmount(): Calculates the amount of ingredient after "onclick" on button with class = button

function calculateAmount(id, referenceAmount) {

    // create variable myInput and read value of id = amount 
    let myInput = document.getElementById("amount").value;
        console.log(myInput);
    // create variable basic portion for four (4) portions
    let basicPortion = 4;

    // calculates new amount of ingredient depending of portion (generally -> because of function parameter: referenceAmount)
    let newAmount = (referenceAmount / basicPortion) * myInput;

    // to log onclick on button, set console.log(result) here
    // console.log(newAmount);

    // writes calculated amount in div container with id (generally -> because of function parameter: id)
    document.getElementById(id).innerHTML = newAmount;

    // finish of function calcuatePortion ()
    return newAmount;
};

// function checkValue(): is checking value of myInput. Min=1 and Max=20 
// -> If borders are not fully observed, the calue does not change (corresponds for four portions)
function checkValue(id, referenceAmount) {

    // create variable myInput and read value of id = amount
    let myInput = document.getElementById("amount").value;

    if (myInput < 1 || myInput > 20) {
    
        // writes referenceAmount into HTML
        document.getElementById(id).innerHTML = referenceAmount;
        console.log("Value is not valid");
    }

    else {
        console.log("Value is valid");
    }
}

// function scaleIngredient(): Scales all ingredients with new amount after "onclick" on button with class = button
// therefore referenceAmount of all ingredient-ids are necessary
function scaleIngredient() {

    // scales "Rinderhackfleisch" 
    calculateAmount("amount_mincemeat", 500);
    checkValue("amount_mincemeat", 500);

    // scales "passierte Tomaten" 
    calculateAmount("amount_tomato", 800);
    checkValue("amount_tomato", 800);

    // scales "Paprikaschote" 
    calculateAmount("amount_paprika", 1);
    checkValue("amount_paprika", 1);

    // scales "Knoblauchzehe" 
    calculateAmount("amount_garlic", 1);
    checkValue("amount_garlic", 1);

    // scales "Kidneybohnen" 
    calculateAmount("amount_beans", 1);
    checkValue("amount_beans", 1);

    // scales "Mais" 
    calculateAmount("amount_corn", 1);
    checkValue("amount_corn", 1);

    // scales "Zwiebel" 
    calculateAmount("amount_onion", 1);
    checkValue("amount_onion", 1);

    // scales "Tomatenmark" 
    calculateAmount("amount_tomatopaste", 50);
    checkValue("amount_tomatopaste", 50);

    // scales "Paprikapulver"
    calculateAmount("amount_paprikapowder", 2);
    checkValue("amount_paprikapowder", 2);

    // scales "Olivenöl"
    calculateAmount("amount_oliveoil", 2);
    checkValue("amount_oliveoil", 2);
}

// function for toggle responsive menu (add and remove div-container with id = nav_menu_resp)
function toggleRespMenu() {
    // get Element with id = nav_menu_resp and toggle class resp_menu_closed
    document.getElementById('nav_menu_resp').classList.toggle('resp_menu_closed');
}

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