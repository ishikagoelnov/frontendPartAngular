import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SourcingService} from '../services/sourcing.service'

@Component({
  selector: 'app-add-source',
  templateUrl: './add-source.component.html',
  styleUrls: ['./add-source.component.css'],
  providers:[SourcingService]
})
export class AddSourceComponent implements OnInit{
myForm:any;
status:any;
constructor(private sourcingService: SourcingService){}
ngOnInit(): void{
  this.myForm = new FormGroup({
    name:new FormControl('', [Validators.required]),
    url:new FormControl('',[Validators.required])
  })
}
addSource(new_source:any){
  this.sourcingService.addSource(new_source).subscribe(()=>this.status="source added successfull");
  console.log(new_source)
  alert("Source added successfully")
  console.log("source added successfullyyy !!!!!!!!!!!!")
}
rssCheck(url_checked:any){
  let arr=url_checked.split('.');
  arr.forEach((element:any) => {
    if(element=='cms' || element=='xml'){
      return true
    }
    else{
      return false
    } 
  });
}

}
