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

// function for toggle responsive menu (add and remove div-container with id = nav_menu_resp)
function toggleRespMenu() {
    // get Element with id = nav_menu_resp and toggle class resp_menu_closed
    document.getElementById('nav_menu_resp').classList.toggle('resp_menu_closed');
}