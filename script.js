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

bookShelf.addEventListener("click", removeBook);
bookShelf.addEventListener("click", updateStatus);
saveBtn.addEventListener("click", function (e) {
  new Book(title.value, author.value, pages.value, statusBox.checked);
  hideModla();
});
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    books.push(this);
    Createcard(this);
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
  ReadBtn.classList.add("read");
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.textContent = "Remove";
  card.appendChild(bookName);
  card.appendChild(authorName);
  card.appendChild(numberOfPages);
  card.appendChild(StatusOfBook);
  card.appendChild(ReadBtn);
  card.appendChild(removeBtn);
  bookShelf.appendChild(card);
}

let rnd = new Book("think and grow", "nepolean hill", 320, true);

function removeBook(e) {
  let item = e.target;
  if (item.classList.contains("remove")) {
    item.parentElement.remove();
  }
}
function updateStatus(e) {
  let item = e.target;
  if (item.classList.contains("read")) {
    e.target.parentElement.childNodes[3].textContent = "Not Read yet";
    item.textContent = "Read";
    item.classList.add("not-read");
    item.classList.remove("read");
    console.log(item);
  } else if (item.classList.contains("not-read")) {
    e.target.parentElement.childNodes[3].textContent = "Completed Reading";
    item.textContent = "Not Read";
    item.classList.add("read");
    item.classList.remove("not-read");
    console.log(item);
  }
}
