var BookController = (function () {
    function BookController() {
        this._bookAuthor = document.querySelector("#name");
        this._bookTitle = document.querySelector("#book");
        this._bookPrice = document.querySelector("#preco");
        this._bookRepository = new BookRepository();
        this._tableView = new TableView("#table");
        this._tableView.render(this._bookRepository.GetAll());
    }
    BookController.prototype.addBook = function (event) {
        event.preventDefault();
        this._bookModel = new Book(this._bookAuthor.value, this._bookTitle.value, this._bookPrice.valueAsNumber);
        if (this._bookRepository.Add(this._bookModel)) {
            this._tableView.render(this._bookRepository.GetAll());
        }
    };
    return BookController;
}());
//# sourceMappingURL=BookController.js.map