# DDA Vacature's

Ik heb voor DDA vacatures de Over Ons pagina en de Vacature pagina ontworpen, het probleem van DDA was dat ze een future proof website wouden. Hieronder is te zien waarom ik bepaalde keuze's heb gemaakt, en hoe ik die keuze's heb ontworpen met HTML / CSS / JS.

## Wie zijn DDA Vacature's eigenlijk?

DDA Vacature's is een vacature bedrijf waar je vacatures vind voor bij creatieve bureau's, zo vind je onder andere vacatures als: Designer, Scrum Master, Marketeer, Als Strateeg en zo zijn er nog veel meer vacatures te vinden!

# Focus van deze sprint

In sprint 5 heb ik gefocust op het maken van een interactie voor de DDA vacature pagina, ik heb hiervoor een werkende filter functie gemaakt die werkt op: Naam, taal, ( werk ) uren en locatie. Ik ben deze sprint pas begonnen met het ontwerpen van deze pagina. De website is nog niet responsive, en werkt momenteel alleen nog op desktop ( dit omdat het makkelijker was met testen van de website tijdens de lessen ).<br>

### De Pagina

Zo ziet de pagina eruit zodra je erop komt.

<img src="DDA2/content/vacature-pagina.png"><br>

### Zoekfunctie Naam

Als je klikt op zoek een vacature of agency... komt er een zoekbalk tevoorschijn en daarin kan je de vacature naam zoeken waar je naar op zoek bent! Voorbeeld: je zoekt een vacature als UX Designer, dan ziet dat er zo uit. Mocht je het zoeken toch willen annuleren? Dan kan je op het kruisje klikken rechts van het zoekbalkje!<br><br>

<img src="DDA2/content/vacature-pagina-zoekend.png"><br>

### Zoekfunctie Uren

Ook kan je bijvoorbeeld zoeken op het aantal uur dat je per week wilt werken of de locatie / taal, dit ziet er dan zo uit.<br><br>

<img src="DDA2/content/vacature-pagina-uren.png"><br>

### Video Pagina

Ik laat hieronder een video zien waar je kan zien hoe de pagina er werkend uitziet.<br><br>

https://github.com/user-attachments/assets/269a8211-65ad-4c64-9dbc-c7a5f4952ec3


### Link Website

<a href="https://kyantg.github.io/fix-the-flow-interactive-website/DDA2/DDA2.html">Live Website</a>

# Kenmerken

## HTML

De HTML is geschreven volgens de manier die wij hebben aangeleerd bij de HVA, ik heb gezorgd dat de code semantisch is zodat er genoeg ruimte zit zodat de code duidelijk is en goed leesbaar blijft.
Ik heb voor de filter gebruikt gemaakt van een form met daarin een input voor de filter functie.

hieronder de code

<form class="filters">

    <!-- searchbar -->

    <input class="search-bar" type="search" placeholder="zoek een vacature of agency...">

    
## CSS

De CSS is geschreven op volgorde van de website, de website is alleen niet mobile first gebouwd omdat dit een subopdracht was waar ik een werkende filter moest maken waarbij de prioriteit bij javascript lag en niet bij responsiveness. Ik heb niet speciale CSS toegepast ik heb alleen de zoekfilter gemaakt met een border none en daarna een border bottom 1px



## Javascript

De JS is op goede manier geschreven, ik heb als eerst met een querySelector de searchbar en de vacatures aangesproken. Daarna heb ik een addEventListener toegevoegd op de input, daarna heb ik ervoor gezorgd door middel van een function dat het menu werkt.

hieronder de code

// zorgt dat javascript weet wat de zoekbar is

const search = document.querySelector('.search-bar'),
vacature_rows = document.querySelectorAll('.vacatures');

// zorgt dat er een event aan toegevoegd word in dit geval een search filter

search.addEventListener('input', searchTable);

// zorgt dat er een functie aan zit in dit geval dat de zoekfilter werkt op naam / data

function searchTable() {
    vacature_rows.forEach( (row, i) => {
        let vacature_data = row.textContent.toLocaleLowerCase(),
            search_data = search.value.toLocaleLowerCase();

            row.classList.toggle('hide',vacature_data.indexOf(search_data) < 0); } ) }








