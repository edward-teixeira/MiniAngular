System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = (function () {
                function View(selector) {
                    this._table = document.querySelector(selector);
                }
                View.prototype.render = function (model) {
                    this._table.innerHTML = this.template(model);
                };
                return View;
            }());
            exports_1("View", View);
        }
    };
});
//# sourceMappingURL=AbstractView.js.map