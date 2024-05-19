"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeCar(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    for (let option of options) {
        for (let key in option) {
            car.options[key] = option[key];
        }
    }
    return car;
}
let car1 = makeCar('Toyota', 'Corolla', { color: 'blue' }, { sunroof: true });
let car2 = makeCar('Suzuki', 'Alto', { color: 'siliver' });
let car3 = makeCar('Honda', 'City', { color: 'red' }, { sunroof: true });
console.log(car1, "\n", car2, "\n", car3);
