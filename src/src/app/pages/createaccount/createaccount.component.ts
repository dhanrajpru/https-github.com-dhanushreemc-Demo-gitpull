import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import { Routes,Router, RouterModule } from '@angular/router';
import { GlobalContent } from '../../app.globalcontent';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
  accountCreate: FormGroup;
  bar:number;
  countryCode:any;
  countryCodeSelect:boolean;
  passwordStrength: string;
  bar_none:boolean=true;
  bar_weak:boolean;
  bar_medium:boolean;
  bar_strength:boolean;
  progressBarLength: string = 'passwordNone' ;
  errMessageStyle : string;
  errMessageStyle1 : string;
  passwordMatchMessage: string;
  userNameMatchMessage: string;
  constructor(private fb: FormBuilder,private globalContent: GlobalContent,  private router:Router) {
    this.passwordStrength = "pw-none";
  }


  ngOnInit() {
    this.countryCode=this.globalContent.countryCode;
    console.log(this.countryCode.dial_code);

    console.log("country Code="+JSON.stringify(this.globalContent.countryCode[0].name));
    this.accountCreate = this.fb.group({
      'email': ['johndoe@gmail.com',[Validators.required, Validators.pattern('^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+?\.[a-zA-Z]{2,6}$')]],
    
      // 'phonenumber' : ['', [Validators.required,Validators.pattern('(^\+\d\s\(\d{3}\)\s\d{3}\-\d{4}$|^\+\d{1,3}\s\d{2,3}\s\d{2,3}\s\d{2,3}\s\d{2})$')]]
      'phNumber': ['', [Validators.required, Validators.pattern('^[0-9]*')]],
      'userName': ['', [Validators.required]],
      'password': ['', [Validators.required, Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{7,20})$')]],
      'ConfirmPassword': ['', [Validators.required, Validators.pattern]],
      'phCountryCode':['']
    })
  }

  save(): void {
    console.log('userName:' + this.accountCreate.value.userName);
    console.log('password:' + this.accountCreate.value.password);
    console.log('phonenumber:' + this.accountCreate.value.phonenumber);


  }

  strength(){
		console.log("called on change");
		let password = this.accountCreate.value.password;
		let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if(strongRegex.test(password)) {
            this.passwordStrength = "pw-strong";
            this.progressBarLength='passwordStrong';
            this.bar_weak=false;
            this.bar_medium=false;
            this.bar_strength=true;  
        } else if(mediumRegex.test(password)) {
            this.passwordStrength = "pw-medium";
            this.progressBarLength='passwordMedium';
            this.bar_none=false;
            this.bar_weak=false;
            this.bar_medium=true;
            this.bar_strength=false;  
        } else if(password != "") {
            this.passwordStrength = "pw-weak";
            this.progressBarLength='passwordWeak';
            this.bar_none=false;
            this.bar_weak=true;
            this.bar_medium=false;
            this.bar_strength=false;        
        } else {
            this.passwordStrength = "pw-none";
            this.progressBarLength='passwordNone';
            this.bar_none=true;
            this.bar_weak=false;
            this.bar_medium=false;
            this.bar_strength=false; 
        }	

        console.log("this strength", this.passwordStrength);
    }
    
    passwordMatch = function(){
        let password = this.accountCreate.value.password;
        let confirmPassword = this.accountCreate.value.ConfirmPassword

        if(password == confirmPassword && password!=null){
            console.log("matched");
            this.passwordMatchMessage = "Matched";
            this.errMessageStyle1='matchedStyle1';
        }
        else{
            console.log("not matched");
            this.passwordMatchMessage = "Not matched";
            this.errMessageStyle1='unMatchedStyle1';
        }
        console.log(password + ' --- ' + confirmPassword);
    }

    userNameMatch = function(){
        let userName = this.accountCreate.value.userName;
        let confirmUserName = this.accountCreate.value.ConfirmUserName

        if(userName == confirmUserName && userName!=null){
            console.log("matched");
            this.userNameMatchMessage = "Matched";
            this.errMessageStyle='matchedStyle';
        }
        else{
            console.log("not matched");
            this.userNameMatchMessage = "Not matched";
            this.errMessageStyle='unMatchedStyle';
        }
        console.log(userName + ' --- ' + confirmUserName);
    }

    next()
  {  
     this.router.navigate(['/login']);
  }

}

