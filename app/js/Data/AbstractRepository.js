var AbstractRepository = (function () {
    function AbstractRepository() {
        this._context = [];
    }
    AbstractRepository.prototype.GetAll = function () {
        return this._context.slice();
    };
    AbstractRepository.prototype.Add = function (model) {
        console.log(model);
        this._context.push(model);
        return true;
    };
    return AbstractRepository;
}());
//# sourceMappingURL=AbstractRepository.js.map