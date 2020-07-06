System.register([], function (exports_1, context_1) {
    "use strict";
    var Book;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Book = (function () {
                function Book(_author, _title, _price) {
                    this._author = _author;
                    this._title = _title;
                    this._price = _price;
                }
                Object.defineProperty(Book.prototype, "Author", {
                    get: function () {
                        return this._author;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Book.prototype, "Title", {
                    get: function () {
                        return this._title;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Book.prototype, "Price", {
                    get: function () {
                        return this._price;
                    },
                    enumerable: false,
                    configurable: true
                });
                return Book;
            }());
            exports_1("Book", Book);
        }
    };
});
//# sourceMappingURL=Book.js.map