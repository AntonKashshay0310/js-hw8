// 1

// 1)
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']

let string = '';

for (let i = 0; i < friends.length; i += 1) {
    string += friends[i]
    if (i < friends.length - 1) {
        string += ",";
    }
}
console.log(string);

// 2)

console.log(friends.join(","));

// 2

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
]

console.log(cards);

// 3


const cardToRemove = 'Карточка-3';

const removeCard = cards.indexOf(cardToRemove);
cards.splice(removeCard, 1)

console.log(cards);

// 4

const cardToInsert = 'Карточка-6';

cards[cards.length] = 'Карточка-6';
console.log(cards);


// cars[cars.length - 1] = "McLaren";
// console.log(cars);


// 5

 


