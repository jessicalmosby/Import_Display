/* Imports */

import { fetchCars, fetchMonies, fetchNames, fetchStreets } from './fetch-utils.js';
import { renderCars, renderMonies, renderNames, renderStreets } from './render-utils.js';

/* Get DOM Elements */
const carsContainer = document.getElementById('cars-list');
const moneyContainer = document.getElementById('money-list');
const nameContainer = document.getElementById('names-list');
const streetContainer = document.getElementById('streets-list');

/* Events */
window.addEventListener('load', async () => {
    const cars = await fetchCars();
    for (let car of cars) {
        const carEl = renderCars(car);
        carsContainer.append(carEl);
    }
});

window.addEventListener('load', async () => {
    const monies = await fetchMonies();
    for (let money of monies) {
        const moneyEl = renderMonies(money);
        moneyContainer.append(moneyEl);
    }
});

window.addEventListener('load', async () => {
    const names = await fetchNames();
    for (let name of names) {
        const nameEl = renderNames(name);
        nameContainer.append(nameEl);
    }
});

window.addEventListener('load', async () => {
    const streets = await fetchStreets();
    for (let street of streets) {
        const streetEl = renderStreets(street);
        streetContainer.append(streetEl);
    }
});
// (don't forget to call any display functions you want to run on page load!)
