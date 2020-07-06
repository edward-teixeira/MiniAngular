System.register(["./AbstractView"], function (exports_1, context_1) {
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
    var AbstractView_1, TableView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (AbstractView_1_1) {
                AbstractView_1 = AbstractView_1_1;
            }
        ],
        execute: function () {
            TableView = (function (_super) {
                __extends(TableView, _super);
                function TableView(selector) {
                    return _super.call(this, selector) || this;
                }
                TableView.prototype.template = function (args) {
                    return ("\n                <table class=\"table table-striped\">\n                        <thead class=\"thead-dark\">\n                        <tr>\n                            <th>Id</th>\n                            <th scope=\"col\">Autor</th>\n                            <th scope=\"col\">Livro</th>\n                            <th scope=\"col\">Preco</th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                            " + args.map(function (it, index) {
                        return ("\n                                    <tr>\n                                        <th class=\"t-scope\">" + index.toString().charAt(0).toUpperCase() + "</th>\n                                        <td" + it.Author + "</td>\n                                        <td>" + it.Title + "</td>\n                                        <td>R$ " + it.Price + "</td>\n                                        <td><button class=\"btn btn-info\">Editar</button></td>\n                                        <td><button class=\"btn btn-info\">Remover</button></td>\n                                    </tr>\n                                ");
                    }).join('') + "\n                        </tbody>\n                    </table>\n            ");
                };
                return TableView;
            }(AbstractView_1.View));
            exports_1("TableView", TableView);
        }
    };
});
//# sourceMappingURL=TableView.js.map