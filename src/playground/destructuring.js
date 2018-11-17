//
// Object destructuring
//





// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// }

// const { name = 'Anonymous', age } = person  // It only uses 'Anonymous' as default if there's no name.
// // const name = person.name
// // const age = person.age


// console.log(`${name} is ${age}.`);



// // if (person.location.city && person.location.temp) {
// //     console.log((`It's ${person.location.temp} in ${person.location.city}.`));
// // }


// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log((`It's ${temperature} in ${city}.`));
// }


// const book = {
//     title: 'Ego Is The Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher



// console.log(publisherName); // Penguin, Self-Published as default










//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

// const [ , city, state, zip ] = address

// console.log(`You're ${city} ${state}.`);




const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75']


// We want to print "A medium Coffe (hot) costs $2.50."

const [ itemName, , mediumPrice, largePrice ] = item

console.log(`A large ${itemName} costs ${largePrice}. `);

