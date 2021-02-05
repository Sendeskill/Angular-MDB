import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact/contact';
import * as email from 'nativescript-email';
import { Observable } from 'rxjs';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = new Contact();

  itemName = '';
  itemEmail = '';
  itemSubject = '';
  itemMessage = '';
  option: any;
  items: Observable<any[]>;

  contactForm: FormGroup;

  CLOUND_URL = 'https://us-central1-desk-code-example.cloudfunctions.net/emailSender'

  composeOptions: email.ComposeOptions;

  constructor(private fb: FormBuilder,
    private contactService: ContactService) {

    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormSubject: ['', Validators.required],
      contactFormMessage: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.contactService
      .sendEmail(this.contact).subscribe(() => {
        alert('Email enviado com sucesso');
      }, err => {
        console.log(err);
      });
  }

  clearForm() {
    this.contactForm.reset();
  }
}
