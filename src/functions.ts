/* eslint-disable no-redeclare */
import Encyclopedia from './classes/Encyclopedia';
import { Category } from './enums';
import { Book, Callback, LibMgrCallback, TOptions } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getAllBooks(): readonly Book[] {
    const books: Book[] = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript,
        },
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of Books: ${books.length}`);
    console.log(books.find(book => book.available).title);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(book => book.title);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const { title, author } = getAllBooks()[index] ?? {};

    return [title, author];
}

export function calcTotalPages(): bigint {
    const libraries = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ] as const;

    return libraries.reduce((acc, { books, avgPagesPerBook }) => acc + BigInt(books * avgPagesPerBook), BigInt(0));
}

export function createCustomerID(name: string, id: number): string {
    return `${name}-${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`${name} ${age ?? ''} ${city ?? ''}`.trimRight());
}

export function getBookByID(id: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Client - ${customer}`);
    return bookIDs.reduce((titles, bookID) => {
        const book = getBookByID(bookID);
        return book?.available ? [...titles, book.title] : titles;
    }, []);
}

export function getTitles(author: string): Book[];
export function getTitles(available: boolean): Book[];
export function getTitles(id: number, available: boolean): Book[];
export function getTitles(...args: [string | boolean] | [number, boolean]): Book[] {
    const allBooks = getAllBooks();

    if (args.length === 1 && typeof args[0] === 'string') {
        const [author] = args;
        return allBooks.filter(book => book.author === author);
    }

    if (args.length === 1 && typeof args[0] === 'boolean') {
        const [available] = args;
        return allBooks.filter(book => book.available === available);
    }

    if (args.length === 2) {
        const [id, available] = args;
        return allBooks.filter(book => book.id === id && book.available === available);
    }
}

export function assertStringValue(param: any): asserts param is string {
    if (typeof param !== 'string') {
        throw new TypeError('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new TypeError('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof Encyclopedia);
    data.printItem();
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return title.split('').reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, property: BookProperties) {
    const value = book[property];

    return typeof value === 'function' ? value.name : value;
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 90;

    return options;
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(
    object: TObject,
    key: TKey,
): TObject[TKey] | string {
    const value = object[key];
    return typeof value === 'function' ? value.name : value;
}

export function getBooksByCategory(category: Category, callback: Callback<string[]>) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category): Promise<void> {
    const result = await getBooksByCategoryPromise(category);
    console.log(result);
}
