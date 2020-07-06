System.register(["../model/Index", "../Data/Index", "../view/Index"], function (exports_1, context_1) {
    "use strict";
    var Index_1, Index_2, Index_3, BookController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Index_1_1) {
                Index_1 = Index_1_1;
            },
            function (Index_2_1) {
                Index_2 = Index_2_1;
            },
            function (Index_3_1) {
                Index_3 = Index_3_1;
            }
        ],
        execute: function () {
            BookController = (function () {
                function BookController() {
                    this._bookAuthor = document.querySelector("#name");
                    this._bookTitle = document.querySelector("#book");
                    this._bookPrice = document.querySelector("#preco");
                    this._bookRepository = new Index_2.BookRepository();
                    this._tableView = new Index_3.TableView("#table");
                    this._tableView.render(this._bookRepository.GetAll());
                }
                BookController.prototype.addBook = function (event) {
                    event.preventDefault();
                    this._bookModel = new Index_1.Book(this._bookAuthor.value, this._bookTitle.value, this._bookPrice.valueAsNumber);
                    if (this._bookRepository.Add(this._bookModel)) {
                        this._tableView.render(this._bookRepository.GetAll());
                    }
                };
                return BookController;
            }());
            exports_1("BookController", BookController);
        }
    };
});
//# sourceMappingURL=BookController.js.map