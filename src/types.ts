import { createCustomer, getBooksByCategoryPromise } from './functions';
import { Author, Book, Person } from './interfaces';

type BookProperties = keyof Book;
type PerrsonBook = Person & Book;
type BookOrUndefined = Book | undefined;

type BookRequiredFields = Required<Book>;
type UpdatedBook = Partial<Book>;
type AuthorWoEmail = Omit<Author, 'email'>;
type CreateCustomerFunctionType = typeof createCustomer;

type fn = (p1: string, p2: number, p3: boolean) => symbol;
type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop;
}[keyof T];

type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never;
}[keyof T];

type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;
// type Primitive1 = RequiredProps<string>;
// type Primitive2 = RequiredProps<string>;
type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookRequiredOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type T = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;

export {
    AuthorWoEmail,
    CreateCustomerFunctionType,
    BookRequiredFields,
    UpdatedBook,
    BookProperties,
    PerrsonBook,
    BookOrUndefined,
};
