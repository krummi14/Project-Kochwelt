// function created by Christian Barzen
// Berechnung der Zutaten für p Portionen inkl. EInhaltung der Grenzen

document.getElementById("calc").addEventListener("click", () => {  // Holt aus dem dem Button die ID und startet die Funktion beim clicken
    const p = Number(document.getElementById("portionen").value);  // liest die const P aus dem Input portionen aus als Zahl
    const items = document.querySelectorAll(".ingredientsList li");      // sucht alle li elemente in der Liste mit der Klasse Zutatenliste

    if (p < 1 || p > 20) {
        items.forEach(item => {         // geht jedes li feld nacheinander durch
            const base = Number(item.dataset.base);         //holt die Grundmenge aus data-base
            const text = item.dataset.text;                 // holt Einheit und Bezeichnung aus Data-text
            item.textContent = `${base} ${text}`;       // schreibt die Grundmenge wieder zurück weil die Grenzen misbraucht wurden
        });
        console.log("Wert ist nicht ok")
    }

    else {

        items.forEach(item => {         // geht jedes li feld nacheinander durch
            const base = Number(item.dataset.base);         //holt die Grundmenge aus data-base
            const text = item.dataset.text;                 // holt Einheit und Bezeichnung aus Data-text
            item.textContent = `${base * p} ${text}`;       // schreibt die neue Mnege (Grundmenge * Portion) zurück in das li)
        });
        console.log("Wert ist ok")
    }
});