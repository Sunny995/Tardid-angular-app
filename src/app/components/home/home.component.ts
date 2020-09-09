import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   edit =false;
  foodItems=[];
  selectedItem={};
  constructor(private route: Router,public service : DataService) { }

  ngOnInit(): void {
    this.service.getFoodItems()
    .subscribe(data =>  {
         this.foodItems = Object.assign([], data);
         sessionStorage.setItem('lastid',this.foodItems[this.foodItems.length-1].id.toString());
      });

  }

  delete(p:any):void{
    this.service.deleteItem(p.id).subscribe(data=> {
     console.log(data);
     this.ngOnInit();
    });
  }

  editItem(p:any):void{
    this.selectedItem = p;
    this.edit =true;
  }

  showItemsAfterEdit():void{
    this.edit = false;
    this.ngOnInit();
  }

}
