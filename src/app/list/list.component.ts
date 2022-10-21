import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  form: FormGroup;
  listData:any;
  isEdit =false;
  constructor() { }

  ngOnInit(): void {
    this.listData = [];
    this.form = new FormGroup({
      name: new FormControl(''),
      company:new FormControl(''),
      state:new FormControl(''),
      country:new FormControl(''),

    });
  }
  onSubmit(){
    console.log(this.form.value)
    this.listData.push(this.form.value)
    this.form.reset();

  }
  removeItem(element){
    this.listData.forEach((value,index) => {
      if(value== element)
      this.listData.splice(index,1);
      
    });
  }

  onEdit(user : any){
    
    debugger;
    this.listData.forEach(element => {
      element.isEdit = false
    })
    user.isEdit = true;
    this.form.reset();
    console.log(this.listData)
    
  };
  
  
  
}

