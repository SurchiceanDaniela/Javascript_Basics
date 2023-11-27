# StepSync
StepSync è JS Counter realizzato da Daniela con lo scopo di contare i passi e convertire il numero di passi in metri e in kilometri percorsi
disponibile al url https://main--scintillating-gumdrop-0b3562.netlify.app/

## Tabella dei Contenuti
### Introduzione
### Struttura
### Tecnologie usate
### Usabilità
### Responsive

## Introduzione

Il progetto consiste nella creazione di un contatore che permette all'utente di incrementare e decrementare di 1 il proprio valore, che inizialmente sarà 0, utilizzando i due pulsanti +/-.
Oltre alle funzioni base, ho creato, un pulsante reset, che permette di azzerare il valore del contatore e la funzione convertitore che trasforma il numero di passi in metri e kilometri.

## Struttura

La struttura del progetto:

index.html : contiene la struttura portante del progetto, nella quale sono inseriti il foglio di stile (CSS) per la grafica del conta passi e lo script per le funzioni.
styles.css: il foglio di stile con cui ho creato lo stile e la grafica del conta passi.
script.js : script utilizzato per creare i vari elementi HTML e le funzioni contatore (aumenta/diminuisci, azzera e la conversione di passi in metri).

## Tecnologie Usate

Per creare il contatore StepSync ho utilizzato diverse tecnologie:
Visual Studio Code, come editor per la scrittura del codice.
Canva, con editor delle immagini, dei video e delle icone utilizzate.
HTML, per realizzare la struttura del contatore.Bootstrap, il framework CSS per lo sviluppo dell'interfaccia web che ho utilizzato per rendere il sito reattivo al 100%.
CSS, per i fogli di stile;
JavaScript, linguaggio di programmazione che utilizzo per le funzionalità del contatore.
Git, il sistema di controllo delle versioni moderno di gran lunga più utilizzato attualmente a livello globale.
Firebase, l'hosting gratuito per ospitare il progetto e renderlo visibile.

## Usabilità

Usare il contatore è molto semplice. Il valore del contatore viene aumentato e diminuito di 1 con un clic sui pulsanti + / -. Per azzerare il valore corrente basta cliccare sul pulsante reset.
Ogni passo è convertito in unità metro, quindi un passo equivale a 0.6 metri.
Inoltre quando i metri calcolati arrivano a 1000 in automatico questi vengono convertiti in kilometri e l’unità di misura passa da metri a kilometri.

## Responsive

Grazie all'utilizzo delle Media Queries, sono riuscito a curare l'aspetto Responsive del contatore e del sito, che si adatta perfettamente al cambiamento di dimensione del dispositivo su cui viene visualizzato.
