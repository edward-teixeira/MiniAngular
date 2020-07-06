import { Book } from "../model/Index";
import { BookRepository } from "../Data/Index";
import { View, TableView} from "../view/Index";

export class BookController {

        private _bookAuthor: HTMLInputElement;
        private _bookTitle: HTMLInputElement;
        private _bookPrice: HTMLInputElement;
        private _bookModel: Book;
        private  _bookRepository: BookRepository;
        private _tableView: View<Book[]>;

        constructor() {
            this._bookAuthor = document.querySelector("#name");
            this._bookTitle = document.querySelector("#book");
            this._bookPrice = document.querySelector("#preco");
            this._bookRepository = new BookRepository();
            this._tableView = new TableView("#table");
            this._tableView.render(this._bookRepository.GetAll());
        }

        addBook(event: Event): void {
            event.preventDefault();
            this._bookModel = new Book(this._bookAuthor.value, this._bookTitle.value, this._bookPrice.valueAsNumber);
            if(this._bookRepository.Add(this._bookModel)){
                this._tableView.render(this._bookRepository.GetAll());
            }
        }
    }