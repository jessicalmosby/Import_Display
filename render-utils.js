export function renderCars(cars) {
    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = cars.model;

    const p = document.createElement('p');
    p.textContent = `This is a ${cars.model} made by ${cars.make} in ${cars.year}.`;

    // const ul = document.createElement('ul');
    // for (let car of cars.favorites) {
    //     const li = document.createElement('li');
    //     li.textContent = car;
    //     ul.append(li);
    // }
    div.append(h3, p);
    return div;
}

export function renderMonies(money) {
    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = money.currency;

    const p = document.createElement('p');
    p.textContent = `In ${money.country} the currency is ${money.currency} and the currency code is ${money.currency_code}.`;

    div.append(h3, p);
    return div;
}

export function renderNames(names) {
    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = names.full_name;

    const p = document.createElement('p');
    p.textContent = `Full name: ${names.full_name} American: ${names.american} European: ${names.european}`;

    div.append(h3, p);
    return div;
}

export function renderStreets(streets) {
    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = streets.name;

    const p = document.createElement('p');
    p.textContent = `You live on ${streets.number} ${streets.name} ${streets.suffix}`;

    div.append(h3, p);
    return div;
}
