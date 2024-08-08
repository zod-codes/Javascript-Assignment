impo

const library = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: "1925",
        availability: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: "1960",
        availability: true
    },
    {
        title: "1984",
        author: "George Orwell",
        year: "1949",
        availability: true
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: "1813",
        availability: true
    }
];

library[3].availability = false;

library.splice(3, 1);

let titles = new Array;
let element

for (let i = 0; i < library.length; i++) {
    element = library[i];
    for (const key in element) {
        if (Object.prototype.hasOwnProperty.call(element, key)) {
            const obj = element[key];
            String(obj).includes("The Great Gatsby") ? console.log(true) : console.log(false);            
        };
    };
    titles.push(element.title);   
};

library[0].availability = false;
library.shift();

library.unshift({
    title: "The Catcher in the Rye",
    author: "J.D Salinger",
    year: "1951",
    availability: true
});

console.log(titles.join(" , "), library);








