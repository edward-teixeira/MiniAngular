import { BookController } from "./controller/Index";

// Main
const controller = new BookController();
document.querySelector("#bookForm")
                     .addEventListener("submit", controller.addBook.bind(controller))