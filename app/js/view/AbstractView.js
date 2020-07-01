var View = (function () {
    function View(selector) {
        this._table = document.querySelector(selector);
    }
    View.prototype.render = function (model) {
        this._table.innerHTML = this.template(model);
    };
    return View;
}());
//# sourceMappingURL=AbstractView.js.map