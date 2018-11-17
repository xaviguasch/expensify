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


const book = {
    title: 'Ego Is The Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher



console.log(publisherName); // Penguin, Self-Published as default
