{

//generic constraint with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}

type Owner = "bike" | 'car' | 'ship';

type Owner2 = keyof Vehicle

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
}

const user = {
    name: 'Mr. Rudra',
    age:26,
    address: 'ctg'
}

const car = {
    model: 'toyota',
    year: 2000
}

const result = getPropertyValue(car, 'model')








































}