//functionality

function displayForm() {
    form.classList.toggle('hidden')
}

function Book() {
    this.title = form.title.value
    this.author = form.author.value
    this.pages = form.pages.value
    this.status = form.status.value
}

function display(e) {
    e.preventDefault();
    const newBook = new Book();
    library.unshift(newBook);
    cardDetails(library);
    displayForm();
    form.reset();
    console.log(library);
}

function removeCard(e) {
    const title = e.target.parentNode.firstChild.textContent;
    removeBook(title, library);
    e.target.parentNode.remove();
}

function cardDetails(arr) {
    const key = Object.keys(arr[0]);

    const card = document.createElement('div');
    card.className = 'card';

    const erase = document.createElement('button');
        erase.innerText = 'DELETE';
        erase.className = 'erase';
        erase.onclick = removeCard;
    
    for (let j = 0; j < key.length; j++) {
        const data = document.createElement('p');
        
        if (key[j] === 'author') {
            data.textContent = `by ${arr[0][key[j]]}`;
            card.append(data);
        }
        else if (key[j] === 'pages') {
            data.textContent = `${arr[0][key[j]]} pages`
            card.append(data);
        }
        else if (key[j] === 'status') {
            const button = document.createElement('button');

            arr[0][key[j]] === 'yes' ? button.innerText = 'Complete' : button.innerText = 'Read';

            button.innerText === 'Complete' ? button.className = 'complete' :
                button.className = 'read';
            
            button.onclick = toggleStatus;
            card.append(button);
        }
        else {
            data.textContent = arr[0][key[j]]
            card.append(data);
        }
        
        card.append(erase);
    }
    
    lib.prepend(card);
}

function removeBook(str, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].title === str)
            arr.splice(i, 1);
    }
    console.log(arr)
}

function toggleStatus(e) {
    e.target.className === 'read' ? e.target.className = 'complete' : e.target.className = 'read';
    e.target.className === 'read' ? e.target.innerText = 'Read' : e.target.innerText = 'complete'
}

//DOM manipulation

const library = [];

const addBook = document.querySelector('.button')
addBook.addEventListener('click', displayForm);

const lib = document.querySelector('.lib');

const form = document.querySelector('form');
form.addEventListener('submit', display)







