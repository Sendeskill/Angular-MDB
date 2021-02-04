import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

    URL_CONTATO = 'Contato';

    constructor(http: HttpClient) {
    }

    protected _getURLPadrao(): string {
        return this.URL_CONTATO;
    }

    sendEmail() {

    }
}
