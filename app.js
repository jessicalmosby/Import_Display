/* Imports */

import { fetchCars } from './fetch-utils.js';
import { renderCars } from './render-utils.js';

/* Get DOM Elements */
const carsContainer = document.getElementById('cars-list');

/* Events */
window.addEventListener('load', async () => {
    const cars = await fetchCars();
    for (let car of cars) {
        const carEl = renderCars(car);
        carsContainer.append(carEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
