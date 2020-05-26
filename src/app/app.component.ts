import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForms';
  myForm:FormGroup;
  countries={
    IND:{
      code:"IND",
    name:"India",
    states:{
      TN:{
        code:"TN",
        name:"Tamil Nadu",
        cities:[{
          code:"MDU",
          name:"Madurai"
        },{
          code:"CHN",
          name:"Chennai"
        }]
      },
      KL:{
        code:"KL",
        name:"kerala",
        cities:[{
          code:"WND",
          name:"Wayanad"
        },{
          code:"KCH",
          name:"Kochin"
        }]
      }
    }
    },
    DB:{
      code:"DB",
    name:"Dubai",
    states:{
      DM:{
        code:"DM",
        name:"Dubai Main Road",
        cities:[{
          code:"VK",
          name:"Vivekandar theru"
        }]
      },
      DK:{
        code:"DK",
        name:"Dubai kuruku theru",
        cities:[{
          code:"BS",
          name:"City 1"
        }]
      }
    }
    }
  }
  // countryList=[];
  stateList=[];
  cityList=[];
  constructor(){
    this.myForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      pass:new FormControl('',Validators.required),
      cnfrm_pass:new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      marital_status:new FormControl('',Validators.required),
      favFood:new FormControl('',Validators.required),
      favcolor:new FormControl('',Validators.required)
    })
    this.myForm.get('country').valueChanges.subscribe((data)=>{
      // console.log(data);
      this.stateList=Object.keys(this.countries[data].states).map((item)=>{
        return this.countries[data].states[item];
      });
      })
    this.myForm.get('state').valueChanges.subscribe((data)=>{
      // console.log(this.stateList,data);
      // console.log(this.countries[this.myForm.get('country').value]);
      this.cityList=this.countries[this.myForm.get('country').value]["states"][data]["cities"];
      // console.log(this.cityList);
      })
  };
  countryList=Object.keys(this.countries);

  onSubmit(){
    if(this.myForm.valid){
      console.log(this.myForm.value);
      alert("Form Submitted successfully");
    }
    else{
      alert("Fill the form properly and try re submitting");
    }
  }
}
