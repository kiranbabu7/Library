"use strict";
//ADD BOOK Modal
const modal = document.querySelector(".modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
function ShowModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function hideModla() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener("click", ShowModal);

btnCloseModal.addEventListener("click", hideModla);
overlay.addEventListener("click", hideModla);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModla();
  }
});

const books = [];
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let statusBox = document.querySelector("#status");
const saveBtn = document.querySelector(".save");
const bookShelf = document.querySelector(".bookshelf");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    books.push(this);
  }
}
function Createcard(book) {
  const card = document.createElement("div");
  card.classList.add("card");
  const bookName = document.createElement("h3");
  bookName.textContent = book.title;
  const authorName = document.createElement("h3");
  authorName.textContent = book.author;
  const numberOfPages = document.createElement("h3");
  numberOfPages.textContent = `${book.pages} Pages`;
  const StatusOfBook = document.createElement("h3");
  StatusOfBook.textContent = `${
    book.read ? "Completed Reading" : "Not Read yet"
  }`;
  const ReadBtn = document.createElement("button");
  ReadBtn.textContent = "Read";
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  card.appendChild(bookName);
  card.appendChild(authorName);
  card.appendChild(numberOfPages);
  card.appendChild(StatusOfBook);
  card.appendChild(ReadBtn);
  card.appendChild(removeBtn);
  bookShelf.appendChild(card);
}
saveBtn.addEventListener("click", function (e) {
  new Book(title.value, author.value, pages.value, statusBox.checked);
  addBooks();
  hideModla();
});
function addBooks() {
  books.forEach((book) => {
    Createcard(book);
  });
}
let rnd = new Book("kiran", "kira", 20, true);
let rnd2 = new Book("kiran", "kira", 20, true);
let rnd3 = new Book("kiran", "kira", 20, true);
addBooks();
