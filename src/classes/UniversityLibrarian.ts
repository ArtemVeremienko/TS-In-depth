import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from '../interfaces';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    @format() name: string;
    email: string;

    @logMethod
    assistCustomer(@logParameter custName, @logParameter bookTitle) {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

    @writable(true)
    assistFacility(): void {
        console.log('Assisting facility');
    }

    @writable(false)
    techCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };
