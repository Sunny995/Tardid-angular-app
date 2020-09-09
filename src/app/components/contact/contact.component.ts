import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router,public service : DataService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({

      name: ['', Validators.required],
      mobile: ['', Validators.required],

    });
  }


}
