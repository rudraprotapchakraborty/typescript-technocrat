{


//generic type

type GenericArray<T> = Array<T>

// const rollNumbers: number[] = [3,6,8];
const rollNumbers: GenericArray<number> = [3,6,8];

// const mentors: string[] = ['mr. x', 'mr. y', 'mr. z']
const mentors: GenericArray<string> = ['mr. x', 'mr. y', 'mr. z']

// const boolArray: boolean[] = [true, false, true]
const boolArray: GenericArray<boolean> = [true, false, true]

const user: GenericArray<{name: string, age: number}> = [
    {
        name: 'Rudra',
        age: 100,
    },
    {
        name: 'jhankar',
        age: 110,
    },
]

const add = (x:number, y:number) => x+y

add(10,20)


//generic tuple

type GenericTuple<X,Y> = [X, Y]

const manush: GenericTuple<string,string> = ['mr.x', 'mr.y']

const UserWithID: GenericTuple<number, {name: string, email: string}> = [1234, {name: 'rudra', email: 'rudra@gmail.com'}]






















}