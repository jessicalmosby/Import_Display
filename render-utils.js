export function renderCars(cars) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = cars.model;

    const p = document.createElement('p');
    p.textContent = `This is a ${cars.model} made by ${cars.make} in ${cars.year}.`;

    // const ul = document.createElement('ul');
    // for (let car of cars.favorites) {
    //     const li = document.createElement('li');
    //     li.textContent = car;
    //     ul.append(li);
    // }
    div.append(h2, p);
    return div;
}
