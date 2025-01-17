// Loops Challenges


// let teas = ['Green', 'Earl Grey', 'Peppermint'];
// let selectedTea = [];
// for (let i = 0; i < teas.length; i++) {
//     if (teas[i] === 'Earl Grey') {
//         break;
//     }
//     selectedTea.push(teas[i]);
// }
// console.log(selectedTea);



// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', 'Vienna', 'London', 'Beijing'];
// let visitedCities = [];
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === "London") {
//         continue;
//     }
//     visitedCities.push(cities[i]);
// }
// console.log(visitedCities);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let smallNum = [];
// for (const element of arr) {
//     if (element < 6) {
//         smallNum.push(element);
//     }
// }
// console.log(smallNum)


// let teas = ['Green', 'Earl Grey', 'Peppermint'];
// let preferredTea = [];
// for(const tea of teas) {
//     if (tea === 'Earl Grey') {
//         continue;
//     }
//     preferredTea.push(tea);
// }
// console.log(preferredTea);





let citiesPopulation = {
    'Istanbul': 15000000,
    'Los Angeles': 3792621,
    'Tokyo': 8731000,
    'Vienna': 1877000,
    'London': 8788000,
    'Beijing': 21700000
};

let cityPopulations = {};
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));


for(const key in citiesPopulation) {
    if (citiesPopulation[key] > 20000000) {
        cityPopulations[key] = citiesPopulation[key];
    }
}
// console.log(cityPopulations);f



let teas = ['Green', 'Earl Grey', 'Peppermint'];
let availableTeas = [];


// teas.forEach(function(tea) {
//     if (tea === 'Earl Grey') {
//         return;
//     }
//     availableTeas.push(tea);
// });
// console.log(availableTeas);



// teas.forEach(tea => {
//     if (tea === 'Earl Grey') {
//         return;
//     }
//     availableTeas.push(tea);
// });
// console.log(availableTeas);


let worldCities = ['Istanbul', 'Los Angeles', 'Tokyo', 'Vienna', 'London', 'Beijing'];
let travelledCities = [];
// worldCities.forEach(city => {
//     if (city === 'Tokyo') {
//         return;
//     }
//     travelledCities.push(city);
// });
// console.log(travelledCities);



// worldCities.forEach(function (tea) {
//     if (tea === 'Tokyo') {
//         return;
//     }
//     travelledCities.push(tea);
// })
// console.log(travelledCities);


// let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let doubledNumbers = [];
// for (let index = 0; index < myNumbers.length; index++) {
//   if (myNumbers[index] == 7) {
//     break;
//   }
//   doubledNumbers.push(myNumbers[index] * 2);
// }
// console.log(doubledNumbers);





// let myteas = ['Green', 'Earl Grey', 'Peppermint', 'iced Tea'];
// let shortTeas = [];
// for(const tea of myteas) {
//     if (tea.length < 10) {
//         shortTeas.push(tea);
//     }
// }
// console.log(shortTeas);