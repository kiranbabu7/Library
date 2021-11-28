class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages,${
        this.read ? "Completed Reading" : "Not read yet"
      } `
    );
  }
}

const thinkAndGrowRich = new Book(
  "Think And Grow Rich",
  "Nepoleon Hill",
  320,
  true
);
const atomicHabits = new Book("Atomic Habits", "Nepoleon Hill", 400, false);
