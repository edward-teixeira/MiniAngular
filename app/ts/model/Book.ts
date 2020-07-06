    export class Book {

        constructor(private _author: string,
                    private _title: string,
                    private _price: number)
        {}

        get Author(): string {
            return this._author;
        }

        get Title(): string {
            return this._title;
        }
        get Price(): number {
            return this._price;
        }

    }