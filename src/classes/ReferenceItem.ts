import { timeout } from '../decorators';

/* eslint-disable no-underscore-dangle */
abstract class ReferenceItem {
    // title: string;
    // year: number;
    static department: string = 'Unknown';
    private _publisher: string;
    #id: number;

    constructor(public title: string, protected year: number, id: number) {
        console.log('Creating a new ReferenceItem');
        this.#id = id;
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    getID(): number {
        return this.#id;
    }

    @timeout(2000)
    printItem() {
        console.log(`${this.title} was published in ${this.year} from department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}

export { ReferenceItem };
