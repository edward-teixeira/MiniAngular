System.register([], function (exports_1, context_1) {
    "use strict";
    var AbstractRepository;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            AbstractRepository = (function () {
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
            exports_1("AbstractRepository", AbstractRepository);
        }
    };
});
//# sourceMappingURL=AbstractRepository.js.map