import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
    static handerError(error: Response | any) {
        let errorMessage: string

        if ( error instanceof Response ) {
            errorMessage = `Erro ${error.status} ao obter a URL ${error.url} - ${error.statusText}`
        } else {
            errorMessage = error.toString();
        }

        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}