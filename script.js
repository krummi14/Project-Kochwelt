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

// function calculateAmount(): Calculates the amount of ingredient after "onclick" on button with class = button
function calculateAmount(id, referenceAmount) {

    // create variable myInput and read value of id = amount 
    let myInput = document.getElementById("amount").value;

    // create variable basic portion for four (4) portions
    let basicPortion = 4;

    // calculates new amount of ingredient depending of portion (generally -> because of function parameter: referenceAmount)
    let newAmount = (referenceAmount / basicPortion) * myInput;

    // to log onclick on button, set console.log(result) here
    // console.log(result);

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
    let form = document.getElementById('portion_form');


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