function Book(title, name, pages, status) {
    this.title = title;
    this.name = name;
    this.pages = pages;
    this.status = status;
    console.log(this)
    this.info = () => {
        return `${title} by ${name}, ${pages}pages, ${status}`
    }
};

const book1 = new Book("The Hobbit", "J.R.R Tolkien", 256, "not read yet");

console.log(book1.info());

const book2 = new Object();