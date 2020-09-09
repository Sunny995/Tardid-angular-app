import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() selectedItem ;
  @Output() edited = new EventEmitter();
  editForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router,public service : DataService) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({

      receipe_name: ['', Validators.required],
      procedure: ['', Validators.required],

    });
  }


  onSubmit(receipe: string, procedure: string): void {
   this.service.updateItem({
     id: this.selectedItem.id,
     name: receipe,
     procedure: procedure
   }).subscribe(data => {
    console.log(data);
     this.edited.emit();
        });
        
  }
}
