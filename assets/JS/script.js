
//creazione pulsante decrescente
let bottone_decrescente = document.createElement("button");
bottone_decrescente.setAttribute("id", "bottone-decrescente");
bottone_decrescente.setAttribute("class", "btn btn-primary");
bottone_decrescente.innerHTML = "-";
//creazione pulsante decrescente
let bottone_crescente = document.createElement("button");
bottone_crescente.setAttribute("id", "bottone-crescente");
bottone_crescente.setAttribute("class", "btn btn-primary");
bottone_crescente.innerHTML = "+";
//creazione contatore
let contatore = 0;
let vista_contatore = document.createElement("div");
vista_contatore.setAttribute("class", "col-12");
vista_contatore.setAttribute("id", "contatore");
vista_contatore.innerHTML = contatore;
let cont_bottoni = document.querySelector("[data-value-parent]");
//creazione contenitori 
let bottone_decrescente_contenitore = document.createElement("div");
let bottone_vista_contatore = document.createElement("div");
let bottone_crescente_contenitore = document.createElement("div");
//creazione degli attributi dei contenitori 
bottone_decrescente_contenitore.setAttribute("class", "col-4");
bottone_vista_contatore.setAttribute("class", "col-4");
bottone_crescente_contenitore.setAttribute("class", "col-4");
//creazione dei figli 
bottone_decrescente_contenitore.appendChild(bottone_decrescente);
bottone_vista_contatore.appendChild(vista_contatore);
bottone_crescente_contenitore.appendChild(bottone_crescente);
cont_bottoni.appendChild(bottone_decrescente_contenitore);
cont_bottoni.appendChild(bottone_vista_contatore);
cont_bottoni.appendChild(bottone_crescente_contenitore);
//creazione pulsante reset
let bottone_reset = document.createElement("button");
bottone_reset.setAttribute("id", "bottone-reset");
bottone_reset.setAttribute("class", "btn btn-secondary");
bottone_reset.innerHTML = "reset";
document.querySelector(".display").appendChild(bottone_reset);
//creazione html convertitore PASSI-METRI
let convertitoremetri = 0;
let vista_convertitoremetri = document.createElement("p");
vista_convertitoremetri.setAttribute("class", "m-0");
vista_convertitoremetri.innerHTML = contatore + " passi corrispondono a " + convertitoremetri + " metri ";
document.querySelector(".conversionemetri").appendChild(vista_convertitoremetri);
//evento click crescente
bottone_crescente.addEventListener("click", function () {
  contatore = contatore + 1;
  vista_contatore.innerHTML = contatore;
  //attivazione funzione
  conversionepassimetri(contatore);
});
//evento click descrescente
bottone_decrescente.addEventListener("click", function () {
  contatore = contatore - 1;
  vista_contatore.innerHTML = contatore;
  //attivazione funzione
  conversionepassimetri(contatore);
});
//evento click reset
bottone_reset.addEventListener("click", function () {
  contatore = 0;
  vista_contatore.innerHTML = contatore;
  //attivazione funzione
  conversionepassimetri(contatore);
});
//FUNZIONE CONVERSIONE PASSI-METRI CON PARAMENTRO FORMALE CONTATORE
function conversionepassimetri(cont) {
  if (cont >= 0) {
    let conversione = 0.6 * cont;
    let unitamisura="metri";
    if(conversione>100){
      //conversione da m in km
      conversione= conversione/1000;
      unitamisura="kilometri";
    }
    //tre numeri dopo la virgola
    let roundconversione = conversione.toFixed(3);
    let replaceroundconversione = roundconversione.replace('.',',');
    //carico in html
    vista_convertitoremetri.innerHTML = cont + " passi corrispondono a " + replaceroundconversione + " "+unitamisura;
  } else {
    vista_convertitoremetri.innerHTML = "Error";
  }
}