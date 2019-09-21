function taksoPark() {
    let cars = [
        {model: 'Mercedes-benz', hp: 230, owner: {Name: 'Ivan', Age: 23, ExpirYears: 2}, price: 50000, gradyear: '2014'},
        {model: 'audi a6', hp: 330, owner: {Name: 'Vasyl', Age: 24, ExpirYears: 6}, price: 42000, gradyear: '2012'},
        {model: 'ford focus', hp: 110, owner: {Name: 'Roman', Age: 19, ExpirYears: 1}, price: 8000, gradyear: '2010'},
        {model: 'skoda fabia', hp: 90, owner: {Name: 'Olena', Age: 28, ExpirYears: 3}, price: 9500, gradyear: '2016'},
        {model: 'renault laguna', hp: 130, owner: {Name: 'Petro', Age: 52, ExpirYears: 25}, price: 9300, gradyear: '2009'},
        {model: 'bmw 5', hp: 410, owner: {Name: 'Boris', Age: 25, ExpirYears: 5}, price: 5700, gradyear: '1999'},
        {model: 'fiat punto', hp: 90, owner: {Name: 'Oksana', Age: 29, ExpirYears: 9}, price: 4800, gradyear: '2012'},
        {model: 'lexus lx470', hp: 460, owner: {Name: 'Ruslan', Age: 39, ExpirYears: 20}, price: 102000, gradyear: '2019'},
        {model: 'toyota camry', hp: 170, owner: {Name: 'Mykola', Age: 26, ExpirYears: 4}, price: 19000, gradyear: '2015'},
        {model: 'mitsubisi pajero', hp: 250, owner: {Name: 'Orest', Age: 35, ExpirYears: 15}, price: 22300, gradyear: '2011'}
    ];

    let newOwners = [
        {name: 'Yan', Age: 28, ExpirYears: 15},
        {name: 'Igor', Age: 73, ExpirYears: 7},
        {name: 'Ira', Age: 24, ExpirYears: 5},
        {name: 'Ivan', Age: 36, ExpirYears: 9},
        {name: 'Viktor', Age: 24, ExpirYears: 4},
        {name: 'Vova', Age: 85, ExpirYears: 5},
        {name: 'Dima', Age: 24, ExpirYears: 5},
        {name: 'Nastya', Age: 15, ExpirYears: 2},
        {name: 'Petro', Age: 24, ExpirYears: 5},
        {name: 'Karina', Age: 18, ExpirYears: 3}
    ];

    return {
        repair: () => {
            for (let i = 0; i < cars.length; i+=2) {
                const randomDriversIndex = parseInt(Math.random() * newOwners.length -1);

                cars[i].hp = parseInt(cars[i].hp * 1.1);
                cars[i].price = cars[i].price * 1.05;

                cars[i].owner = newOwners[randomDriversIndex];
                newOwners.splice(randomDriversIndex, 1);
            }
        },

        checkExpierence: () => {
            cars = cars.map(car => {
                if (car.owner.Age > 25 && car.owner.ExpirYears < 5){
                    car.owner.ExpirYears++
                }
                return car;
            });
        },

        calculatePrice: () => cars.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0),

        getCars: () => {
            console.log(cars);
        },

        gerDrivers: () => {
            console.log(newOwners);
        },
    }
}

let vasylCar = taksoPark();

console.log(vasylCar.calculatePrice());
vasylCar.repair();
console.log(vasylCar.calculatePrice());
// vasylCar.getCars();
// vasylCar.checkExpierence();
// vasylCar.getCars();
