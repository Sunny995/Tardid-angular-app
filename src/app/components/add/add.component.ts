import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
   addForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router,public service : DataService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({

      receipe_name: ['', Validators.required],
      procedure: ['', Validators.required],

    });
    
  }


  onSubmit(receipe: string, procedure: string): void {
    let id = parseInt(sessionStorage.getItem('lastid'));
   this.service.addItem({
     id:id+1,
     name: receipe,
     procedure: procedure
   }).subscribe(data => {
    console.log(data);
    this.route.navigateByUrl('/home');
        });
        
  }
}
