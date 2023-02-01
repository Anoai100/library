function displayForm(e) {
    form.classList.toggle('hidden')
};

function Book() {
    this.title = form.title.value
    this.author = form.author.value
    this.pages = form.pages.value
    this.status = form.status.value  
};

const library = [];

const addBook = document.querySelector('.button')
addBook.addEventListener('click', displayForm);

const card = document.createElement('div');

const lib = document.querySelector('.lib');


const form = document.querySelector('form');

const submit = document.querySelector('#submit');
submit.addEventListener('click', display)

function display(e) {
    e.preventDefault();
    const newBook = new Book();
    library.unshift(newBook);
    cardDetails(library);
    displayForm();
    form.reset();
    console.log(library);
}

function cardDetails(arr) {
    for (let i = 0; i < arr.length; i++){
        const key = Object.keys(arr[i]);
        for (let j = 0; j < key.length; j++) {
            const data = document.createElement('p');
            if (key[j] === 'author') {
                data.textContent = `by ${arr[i][key[j]]}`
            }
            else if (key[j] === 'pages') {
                data.textContent = `${arr[i][key[j]]} pages`
            }
            else {
                data.textContent = arr[i][key[j]]
            }
            card.append(data);
        }
    }
    lib.prepend(card);
}

