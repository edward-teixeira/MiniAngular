System.register(["./controller/Index"], function (exports_1, context_1) {
    "use strict";
    var Index_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Index_1_1) {
                Index_1 = Index_1_1;
            }
        ],
        execute: function () {
            controller = new Index_1.BookController();
            document.querySelector("#bookForm")
                .addEventListener("submit", controller.addBook.bind(controller));
        }
    };
});
//# sourceMappingURL=app.js.map