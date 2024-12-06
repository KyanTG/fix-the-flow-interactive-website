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