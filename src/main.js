import {filterMedalla, filterTeam, filterSport, filterGender, mapTeam, mapSport, sortByName } from './data.js';
import data from './data/athletes/athletes.js';

 
// Declarando variables
const athletesData = data.athletes;
const resultsPage = document.querySelector(".page-search__main__results-area__grid");
const popUp = document.querySelector(".page-search__pop-up-wrapper");
const popUpContent = document.querySelector(".page-search__pop-up-content");
const popUpClose = document.querySelector(".page-search__pop-up-close");
const homeButton = document.getElementById("home-button");
const statsButton = document.getElementById("stats-button");
const champsButton = document.getElementById("champs-button");
const anotherChampsButton = document.getElementById("another-champs-button");
const repeatedTeams = mapTeam(athletesData);
const selectTeam = document.getElementById("select-team");
const repeatedSports = mapSport(athletesData);
const selectSport = document.getElementById("select-sport");
/*let search = document.querySelector("#search");*/

filterMedalla(athletesData,"Jordan","Gold");

// Mostrar atletas en las tarjetas y pop up
const showAthletes = (data) => {
    let counter = 0;
    data.forEach((athletes) => {
        counter++;
        if (counter <= 40) {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
            <div class="card__title">
                ${athletes.name}
            </div>
            <ul class="card__content">
                <li>Gender: ${athletes.gender}</li>
                <li>Team: ${athletes.team}</li>
                <li>Sport: ${athletes.sport}</li>
            </ul>
            <div class="card__read-more flex-center">
                <button>Read more</button>
            </div>`;
            resultsPage.appendChild(div)
            const readMore = div.querySelector(".card__read-more");

            readMore.addEventListener("click", () => {
                popUp.style.display = "block";
                popUpContent.innerHTML = showAthletesFullData(athletes);
            });
        };
    });
    return showAthletes;
}
showAthletes(athletesData);

popUpClose.addEventListener("click", () => {
    popUp.style.display = "none";
})
popUp.addEventListener("click", e => {
    if (e.target.className === "page-search__pop-up-wrapper") {
        popUp.style.display = "none";
    }
})

const showAthletesFullData = (athletes) => {
    let content = `
            <div class="card__title">${athletes.name}</div>
            <div class="card__content">
                <li>Gender: ${athletes.gender}</li>
                <li>Height: ${athletes.height}</li>
                <li>Weight: ${athletes.weight}</li>
                <li>Sport: ${athletes.sport}</li>
                <li>Team: ${athletes.team}</li>
                <li>Noc: ${athletes.noc}</li>
                <li>Age: ${athletes.age}</li>
                <li>Event: ${athletes.event}</li>
                <li>Medal: ${athletes.medal}</li>        
            </div>`;
    return content;
};


// Crear listas de opciones (teams y sports)
const teams = [...new Set(repeatedTeams)].sort((a, b) => a > b ? 1 : -1);
const sports = [...new Set(repeatedSports)].sort((a, b) => a > b ? 1 : -1);

function listOfOptions(selectCategory, list) {
    for (let i = 0; i < list.length; i++) {
        let option = document.createElement("option"),
            txt = document.createTextNode(list[i]);
        option.appendChild(txt);
        selectCategory.insertBefore(option, selectCategory.lastChild);
    }
    selectCategory.addEventListener("selectCategory", showAthletes);
}

listOfOptions(selectTeam, teams);
listOfOptions(selectSport, sports);


// Search
/*const filtrar = () => {
    const text = search.value.toLowerCase() //el valor de lo que se puso en el index
    for (let athlete of athletesData) { // for of que funciona en arrays
        let name = athlete.name.toLowerCase(); // para que al bucar, todo sea en minuscula
        if (name.indexOf(text) !== -1) { // retorna el elemento si existe, que sea true 
            showAthletes(text);
        }
    } 
    if (text ==="") {
        resultsPage.innerHTML = `No se han encontrado resultados` ;
    }
}
search.addEventListener("input", filtrar);
*/


// Consola para verificar que funcionen los filtros
console.log(filterTeam(athletesData, "Italy"));
console.log(filterSport(athletesData, "Handball"));
console.log(sortByName(athletesData));
console.log(filterGender(athletesData, "F"));
console.log(filterGender(athletesData, "M"));


// Funcionalidad de la barra de navegación
homeButton.addEventListener("click", homePage);

function homePage() {
    window.location.assign('./index.html');
    document.querySelector("home-main").style.display = "bloxk";
    document.querySelector(".page-search").style.display = "none";

}

anotherChampsButton.addEventListener("click", champsPage);
champsButton.addEventListener("click", champsPage);
function champsPage () {
    document.querySelector(".page-search").style.display = "block";
    document.querySelector(".home-main").style.display = "none";
}

statsButton.addEventListener("click", statsPage);
function statsPage () {
    window.location.assign('./statistics.html');
}

//Statistics HTML 
//let sumaDeMedallas =0;
//for(let i=0; i<=athletesData.length;i++){}

//Dibujar tabla
const $bodytable = document.querySelector("#bodytable");

//Recorrer la data
/*data.forEach((data)=>{
    //Crear un <tr>
    const $tr = document.createElement("tr");
    //Crear el <td> de Country y se une con el tr
    let $tdCountry = document.createElement("td");
    $tdCountry.textContent = team.country; 
    $tr.appendChild($tdCountry);
    //Td de medalla de oro 
    let $tdGolden = document.createElement("td");
    $tdGolden.textContent = golden.golden;
    $tr.appendChild($tdGolden)
    //td de medalla de plata
    let $tdSilver = document.createElement("td");
    $tdSilver.textContent = silver.silver;
    $tr.appendChild($tdSilver)
    //td de medalla de bronce
    let $tdBronze = document.createElement("td");
    $tdBronze.textContent = bronze.bronze;
    $tr.appendChild($tdBronze);
    //<tr> se agrega al cuerpo de la tabla 
    $bodytable.appendChild($tr);
});*/

console.log(data);
