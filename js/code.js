
//lisätään napin kuuntelijafuntio


//haetaan documentin elementit
let body = document.querySelector("body");
let firstname = document.getElementById("firstname");
let note = document.getElementById("note");
let checkbox = document.getElementById("important");


function date() {
    const d = new Date();
    const today = d.getDate();
    let todayString = today.toString();
    const month = d.getMonth() + 1;
    let monthString = month.toString();
    const year = d.getFullYear();
    let yearString = year.toString();
    let date = todayString+"."+monthString+"."+yearString;

    return(date)
}


//luodaan funktio addNote
function addNote() {
    let h4 = document.createElement("h4");
    h4.textContent = date()+" ("+firstname.value+")";

    let p = document.createElement("p");
    p.textContent = note.value;

    //tutkitaan onko checkboxissa täppä

    if(checkbox.checked) {
        h4.classList.add("important");
        p.classList.add("important");
    }

    //kaikki elementit bodyn sisälle
    body.append(h4,p, document.createElement("hr"));

}

