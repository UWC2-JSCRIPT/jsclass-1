class Book {
  constructor(title) {
    this.title = title;
  }
}

class FantasyBook extends Book {
  constructor(title, author) {
    super(title);

    this.author = author;
  }
}

class FilmBook extends Book {
  constructor(title, pageCount) {
    super(title);

    this.pageCount = pageCount;
  }
}

const book1 = new Book("Lord of the Rings");
const book2 = new Book("Return of the King");
const book3 = new FantasyBook("The Hobbit", "J.R.R. Tolkien");
const book4 = new FilmBook("Silent Film", 45678);

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
