// Primitives: number, string, boolean
// More complex types: object, arrays
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = 'Name'

let isInstructor: boolean;
isInstructor = true;


// More complex types

let hobbies: string[];
hobbies = ['Running', 'Hiking'];

type Person = {
    name: string,
    age: number
};

let person: Person
person = {
    name: 'Name',
    age: 12
};

let people: Person[];
people = [
    {
        name: 'Name',
        age: 13
    },
    {
        name: 'Max',
        age: 12
    }
];

// Union type

let test: string | number;

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
// const demoArray = ['a','b',' c'];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); // ['a','b','c','d']

