import {View} from "./AbstractView";
import {Book} from "../model/Book";

export class TableView extends View<Book[]>{

        constructor(selector:string) {
            super(selector);
        }
        template(args: Book[]): string {
            return (`
                <table class="table table-striped">
                        <thead class="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Livro</th>
                            <th scope="col">Preco</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                            ${args.map((it, index) => {
                                return(`
                                    <tr>
                                        <th class="t-scope">${index.toString().charAt(0).toUpperCase()}</th>
                                        <td${it.Author}</td>
                                        <td>${it.Title}</td>
                                        <td>R$ ${it.Price}</td>
                                        <td><button class="btn btn-info">Editar</button></td>
                                        <td><button class="btn btn-info">Remover</button></td>
                                    </tr>
                                `);    
                            }).join('')}
                        </tbody>
                    </table>
            `);
        }
    }