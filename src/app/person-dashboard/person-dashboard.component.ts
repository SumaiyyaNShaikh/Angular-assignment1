import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { PersonModel } from './person-dashboard.model';

@Component({
  selector: 'app-person-dashboard',
  templateUrl: './person-dashboard.component.html',
  styleUrls: ['./person-dashboard.component.css']
})
export class PersonDashboardComponent implements OnInit {

  formValue !: FormGroup;
  personModelObj:PersonModel = new PersonModel();
  personData !: any;
  showAdd!: boolean;
  showUpdate !: boolean;

  constructor( private formBuilder:FormBuilder, private api:ApiService) {
  
   }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      Name:[''],
      Email:[''],
      DOB:[''],
      Avatar:[''],
      country:['']
    })
    this.getAllPerson();
  }
  clickAddPerson(){
   this.formValue.reset();
   this.showAdd = true;
   this.showUpdate = false;
  }
  postPersonDetails(){
    this.personModelObj.Name = this.formValue.value.Name;
    this.personModelObj.Email = this.formValue.value.Email;
    this.personModelObj.DOB   = this.formValue.value.DOB;
    this.personModelObj.Avatar = this.formValue. value.Avatar;
    this.personModelObj.country = this.formValue.value.country;
  
  this.api.postPerson(this.personModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Person Added Successfully");
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllPerson();
  },
  _error=>{
    alert("something went wrong");
  })
  }
  getAllPerson(){
     this.api.getPerson()
     .subscribe(res=>{
       this.personData=res;
     })
  }
  deletePerson(row: any){
    this.api.DeletePerson(row.id)
    .subscribe(res=>{
      alert("Employee Deleted successfully");
      this.getAllPerson();
    })
  }
  onEdit(row:any){
    this.showAdd = false;
    this. showUpdate = true;
    this.personModelObj.id = row.id;
    this.formValue.controls['Name'].setValue(row.Name);
    this.formValue.controls['Email'].setValue(row.Email)
    this.formValue.controls['DOB'].setValue(row.DOB)
    this.formValue.controls['Avatar'].setValue(row.Avatar)
    this.formValue.controls['country'].setValue(row.country)
  }
  updatePersonDetails(){
    this.personModelObj.Name = this.formValue.value.Name;
    this.personModelObj.Email = this.formValue.value.Email;
    this.personModelObj.DOB   = this.formValue.value.DOB;
    this.personModelObj.Avatar = this.formValue. value.Avatar;
    this.personModelObj.country = this.formValue.value.country;

    this.api.UpdatePerson(this.personModelObj,this.personModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllPerson();
    })
  }
}
