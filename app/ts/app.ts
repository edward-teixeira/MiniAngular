

// Main
const controller = new BookController();
document.querySelector("#bookForm")
                     .addEventListener("submit", controller.addBook.bind(controller))