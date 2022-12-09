import { Category } from './enums';
import {
    showHello,
    createCustomerID,
    checkoutBooks,
    getTitles,
    setDefaultConfig,
    printRefBook,
    purge,
    getObjectProperty,
    createCustomer,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';
import { Book, Author, Librarian, Logger, Magazine } from './interfaces';
import { CreateCustomerFunctionType, PerrsonBook, UpdatedBook } from './types';

import { RefBook, Library, ReferenceItem, Shelf, UL } from './classes';
import { UniversityLibrarian } from './classes/UniversityLibrarian';

showHello('greeting', 'TypeScript');

// === 02 Basic Types ===

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
// };

// type BookWithCategory = Book & { category: Category };

// logFirstAvailable(getAllBooks());
// console.log(calcTotalPages());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// === 03 Functions ===

const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
let idGenerator: typeof createCustomerID;
idGenerator = (name, id) => `${name}/id${id}`;
idGenerator = createCustomerID;
// console.log(idGenerator('User', 1));

// createCustomer('Alex');
// createCustomer('Alex', 30);
// createCustomer('Alex', 30, 'New York');

// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

const checkedOutBooks = getTitles(true);
// console.log(checkedOutBooks);

// console.log(bookTitleTransform('You dont know JS'));
// console.log(bookTitleTransform(123));

// === 04 Interfaces ===

const logDamage: Logger = reason => console.log(`Damaged: ${reason}`);

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged(reason) {
        console.log(`Damaged: ${reason}`);
    },
};

// printBook(myBook);
// myBook.markDamaged('missing back cover');

const favoriteAuthor: Author = {
    name: 'Jhon',
    email: 'example@mail.com',
    numBooksPublished: 5,
};

// const favoriteLibrarian: Librarian = {
//     name: 'Mike',
//     email: 'example@google.com',
//     department: 'science pop',
//     assistCustomer(custName, bookTitle) {
//         console.log(`${custName} needs help with ${bookTitle}`);
//     },
// };

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// === 05 Classes ===

// const ref = new ReferenceItem('item', 2010, 1);
// ref.printItem();
// ref.publisher = 'test-publisher';
// console.log(ref.publisher);
// console.log(ref, ref.getID());

// const refBook = new RefBook(123, 'Encyclopedia', 2005, 1);
// const universityLibrarian = new UL.UniversityLibrarian();
// refBook.printItem();
// refBook.printCitation();
// printRefBook(refBook);
// printRefBook(universityLibrarian);

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();

const personBook: PerrsonBook = {
    id: 1,
    author: 'New',
    available: true,
    category: Category.JavaScript,
    email: 'example@mail.com',
    name: 'Test',
    title: 'new title',
};

const options = {
    duration: 200,
};

setDefaultConfig(options);
// console.log(options);

// const flag = true;

// if (flag) {
//     const module = await import('./classes');
//     const reader = new module.Reader();
//     console.log(reader);
// }

// const library = new Library();
const library: Library = {
    id: 1,
    address: 'street',
    name: 'Test',
};
// console.log(library);

// === 07 Generics ===

const inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// console.log(purge(inventory));
// console.log(purge([1, 2, 3, 4, 5]));
const bookShelf = new Shelf();
inventory.forEach(item => bookShelf.add(item));
// console.log(bookShelf.getFirst());

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];
const magazineShelf = new Shelf();
magazines.forEach(item => magazineShelf.add(item));
// console.log(magazineShelf.getFirst());
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(library, 'address'));

const updatedBook: UpdatedBook = {
    author: 'Update',
};

// const params: Parameters<CreateCustomerFunctionType> = ['Jhon', 23, 'Dnipro'];
// createCustomer(...params);

// === 08 Decorators ===
// const o = new UL.UniversityLibrarian();
// console.log(o);

// const fLibrarian = new UL.UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian['printLibrarian']();

// const o = new UL.UniversityLibrarian();
// console.log(o);
// o.assistFacility = null;
// o.techCommunity = null;

// const o = new RefBook(1, 'World', 2022, 1);
// o.printItem();

// const o = new UL.UniversityLibrarian();
// o.name = 'Boris';
// o.assistCustomer('Anna', 'Learn Typescript');
// console.log(o);

// const o = new RefBook(1, 'World', 2022, 1);
// o.copies = -10;

// === 09 Asynchronous Patterns ===
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(titlesCount => console.log(titlesCount))
//     .catch(console.log);
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(console.log);
// console.log('End');

// === 09.03 ===
console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(console.log);
console.log('End');
