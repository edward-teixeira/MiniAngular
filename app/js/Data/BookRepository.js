System.register(["./AbstractRepository"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var AbstractRepository_1, BookRepository;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (AbstractRepository_1_1) {
                AbstractRepository_1 = AbstractRepository_1_1;
            }
        ],
        execute: function () {
            BookRepository = (function (_super) {
                __extends(BookRepository, _super);
                function BookRepository() {
                    return _super.call(this) || this;
                }
                BookRepository.prototype.Add = function (model) {
                    return _super.prototype.Add.call(this, model);
                };
                return BookRepository;
            }(AbstractRepository_1.AbstractRepository));
            exports_1("BookRepository", BookRepository);
        }
    };
});
//# sourceMappingURL=BookRepository.js.map