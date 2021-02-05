import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact';

@Injectable()
export class ContactService {

    URL_CONTATO = 'https://us-central1-desk-code-example.cloudfunctions.net/emailMessage';

    headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS',
        'Accept': 'application/json'
    };

    constructor(private http: HttpClient) {
    }

    sendEmail(contact: Contact): Observable<Contact> {
        const url = this.URL_CONTATO;
        return this.http
            .post<Contact>(url, contact, { headers: this.headers });
    }
}
