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

// create variable currently amount -> showes currently amount as a string of ingredient
let currentlyAmount = document.getElementById('amount_mincemeat').innerHTML;
    // console.log(currentlyAmount);

// function calculatePortion: Calculates the amount of ingredient
function calculatePortion() {
    // create variable myInput and read value of id = amount 
    let myInput = document.getElementById("amount").value;
    // console.log(myInput);

    // create variable basic portion for four (4) portions
    let basicPortion = 4;

    let referenceAmount = 500;
    let result = (referenceAmount/basicPortion)*myInput;
    
    // to log onclick on button, set console.log(result) here
    console.log(result);
    return result;
};

// next:
// - write result into html script
// - if else for value-borders (1 .... 20)