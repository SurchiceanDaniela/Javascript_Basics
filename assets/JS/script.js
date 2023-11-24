//creazione pulsanti//
let bottone_decrescente = document.createElement("button");
bottone_decrescente.setAttribute("id", "bottone-decrescente");
bottone_decrescente.setAttribute("class", "btn btn-primary");
bottone_decrescente.innerHTML = "-";
let contatore = 0;
let vista_contatore = document.createElement("div");
vista_contatore.setAttribute("class", "col-12");
vista_contatore.setAttribute("id", "contatore");
vista_contatore.innerHTML = contatore;
let bottone_crescente = document.createElement("button");
bottone_crescente.setAttribute("id", "bottone-crescente");
bottone_crescente.setAttribute("class", "btn btn-primary");
bottone_crescente.innerHTML = "+";
let cont_bottoni = document.querySelector("[data-value-parent]");

//creazione contenitori//
let bottone_decrescente_contenitore = document.createElement("div");
let bottone_vista_contatore = document.createElement("div");
let bottone_crescente_contenitore = document.createElement("div");
bottone_decrescente_contenitore.setAttribute("class", "col-4");
bottone_vista_contatore.setAttribute("class", "col-4");
bottone_crescente_contenitore.setAttribute("class", "col-4");

bottone_decrescente_contenitore.appendChild(bottone_decrescente);
bottone_vista_contatore.appendChild(vista_contatore);
bottone_crescente_contenitore.appendChild(bottone_crescente);

cont_bottoni.appendChild(bottone_decrescente_contenitore);
cont_bottoni.appendChild(bottone_vista_contatore);
cont_bottoni.appendChild(bottone_crescente_contenitore);


let bottone_reset = document.createElement("button");
bottone_reset.setAttribute("id", "bottone-reset");
bottone_reset.setAttribute("class", "btn btn-secondary");
bottone_reset.innerHTML = "reset";


document.querySelector(".display").appendChild(bottone_reset);

let convertitoremetri = 0;
let vista_convertitoremetri = document.createElement("div");
vista_convertitoremetri.setAttribute("class", "col-12");
vista_convertitoremetri.innerHTML = contatore + " passi corrispondono a " + convertitoremetri + " metri ";
document.querySelector(".conversionemetri").appendChild(vista_convertitoremetri);

bottone_crescente.addEventListener("click", function () {
  contatore = contatore + 1;
  vista_contatore.innerHTML = contatore;
  conversionepassimetri(contatore);

});

bottone_decrescente.addEventListener("click", function () {
  contatore = contatore - 1;
  vista_contatore.innerHTML = contatore;
  conversionepassimetri(contatore);

});

bottone_reset.addEventListener("click", function () {
  contatore = 0;
  vista_contatore.innerHTML = contatore;
  conversionepassimetri(contatore);
});


function conversionepassimetri(cont) {
  if (cont >= 0) {
    let conversione = 0.6 * cont;
    let roundconversione = conversione.toFixed(2);
    vista_convertitoremetri.innerHTML = cont + " passi corrispondono a " + roundconversione + " metri ";
  } else {
    vista_convertitoremetri.innerHTML = "Error";
  }
}