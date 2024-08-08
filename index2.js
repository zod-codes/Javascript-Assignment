const title = document.querySelector("#title");
const year = document.querySelector("#year");
const author = document.querySelector("#author");
const availability = document.querySelector("#available");
const formBtn = document.querySelector("#formBtn");
const display = document.querySelector("#display-data");


let Library = [];
let Iterator = 0;

formBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    checkingForEmptyValues();
    title.value = "";
    author.value = "";
    year.value = "";
    availability.checked = availability.checked === true ? !availability.checked : availability.checked;
    updateUI(Library);
    console.log(Library);
});

function checkingForEmptyValues() {
    let checkForEmptyValues = [title.value, author.value, year.value];
    checkForEmptyValues.every((value) => {
        if (value !== '' || null || undefined) {
            Library.push(createBookObj(title.value, author.value, year.value, availability.checked));
        } else {
            console.error("one or more input fields are empty");
        };
    });
};

function createBookObj(title, author, year, availability) {
    return { title, author, year, availability };
};

function updateUI(array = []) {
    if (array.length > 0) {
        while (Iterator < array.length) {
            const element = array[Iterator];
            const holder = document.createElement("span");
            holder.setAttribute("id", `id-${Iterator}`);
            holder.innerHTML = `
            <h1>Title: ${element.title}</h1>
            <h3>Author: ${element.author}</h3>
            <h3>Year Published: ${element.year}</h3>
            <h3>Available: ${element.availability === true ? "Available" : "Like Davido, it's Unavailable"}</h3>
            <button id="delete-btn" class="id-${Iterator}">Delete</button>`;
            display.append(holder);
            Iterator++;
        };
        let delBtn = document.querySelectorAll("#delete-btn");
        delBtn.forEach(btn => {
            btn.onclick = function (e) {
                let clicked = e.target;
                // let buttonContainer = e.target.parentElement.parentElement;
                // let newLibrary = Library.filter(book => book === clicked);
                Library.splice((value,) => {

                });
                console.log(Library);
            };
        })
    };
};



