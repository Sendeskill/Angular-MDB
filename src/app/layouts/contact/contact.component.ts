import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact/contact';
import * as email from 'nativescript-email';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

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

  composeOptions: email.ComposeOptions;

  constructor(private fb: FormBuilder,
              private db: AngularFireDatabase) {

    this.items = db.list('messages').valueChanges();

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
    this.db.list('/messages').push({
      name: this.contact.name, email: this.contact.email, subject: this.contact.companyName,
      message: this.contact.obs
    });
    alert('Thank you for contacting us, your message has gone through!');
  }

  clearForm() {
    this.contactForm.reset();
  }
}
