    abstract class AbstractRepository<T> {
        protected _context: Array<T>;

        protected constructor() {
            this._context = [];
        }

        GetAll(): T[] {
            return this._context.slice();
        }
        Add(model: T): boolean {
            console.log(model);
            this._context.push(model);
            return true;
        }
       /* edit(model: T) {
            const instance = this._context.filter(it => it === model);
        }
        delete(model: T): void {
           this._context.map((it, index) => {
               return it !== model
           });
        }*/

    }