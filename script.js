// function for contact.html
// sendMail()
function sendMail(event){﻿
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

// function calculatePortion(): Calculates the amount of ingredient after "onclick" on button with class = button
function calculatePortion(id, referenceAmount) {
   
    // create variable myInput and read value of id = amount 
    let myInput = document.getElementById("amount").value;

    // create variable basic portion for four (4) portions
    let basicPortion = 4;
    
    // calculates new amount of ingredient depending of portion (generally -> because of function parameter: referenceAmount)
    let newAmount = (referenceAmount/basicPortion)*myInput;
    
    // to log onclick on button, set console.log(result) here
    // console.log(result);

    // writes calculated amount in div container with id (generally -> because of function parameter: id)
    document.getElementById(id).innerHTML = newAmount;
    
    // finish of function calcuatePortion ()
    return newAmount;
};

// function scaleIngredient(): Scales all ingredients with new amount after "onclick" on button with class = button
// therefore referenceAmount of all ingredient-ids are necessary
function scaleIngredient() {

    // scales "Rinderhackfleisch" 
    calculatePortion("amount_mincemeat", 500);

    // scales "passierte Tomaten" 
    calculatePortion("amount_tomato", 800);

    // scales "Paprikaschote" 
    calculatePortion("amount_paprika", 1);

    // scales "Paprikaschote" 
    calculatePortion("amount_paprika", 1);

    // scales "Knoblauchzehe" 
    calculatePortion("amount_garlic", 1);

    // scales "Kidneybohnen" 
    calculatePortion("amount_beans", 1);
    
    // scales "Mais" 
    calculatePortion("amount_corn", 1);

    // scales "Zwiebel" 
    calculatePortion("amount_onion", 1);

    // scales "Tomatenmark" 
    calculatePortion("amount_tomatopaste", 50);

    // scales "Paprikapulver"
    calculatePortion("amount_paprikapowder", 2);

    // scales "Olivenöl"
    calculatePortion("amount_oliveoil", 2);
}

// next:
// - if else for value-borders (1 .... 20)