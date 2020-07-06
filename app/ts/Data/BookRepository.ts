import {AbstractRepository} from "./AbstractRepository";
import {Book} from "../model/Book";

export class BookRepository extends AbstractRepository<Book>{

        constructor() {
            super();
        }

        Add(model: Book): boolean {
            return super.Add(model);
        }

    }