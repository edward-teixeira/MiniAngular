    export abstract class View<T> {
        private _table: Element;

        protected constructor(selector: string) {
            this._table = document.querySelector(selector);
        }

        render(model: T) {
            this._table.innerHTML = this.template(model);
        }

        abstract template(args: T): string;
    }