import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from './login.service';
import { Login } from './login';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  accountLogin: FormGroup;
  loginMessage;
  hidePassword: boolean;
  hidePasswordIcon: string;

  constructor(
    private localstorageService: LocalStorageService, 
    private ls: LoginService, 
    private fb: FormBuilder, 
    private router: Router) {
    
      this.hidePassword = true;
      this.hidePasswordIcon = "fa fa-eye-slash";

  }

  ngOnInit() {


    this.accountLogin = this.fb.group({
      'username': ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4}[a-zA-Z0-9]*$')]],
      'password': ['', [Validators.required, Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{7,20})$')]],
      'rememberMe': [false]
    });
    this.loadUserCredentials();
  }

  remember(){
    var remMe = this.accountLogin.value.rememberMe;
    if(remMe){ 
      remMe = false;
    }
    else{
      remMe = true;
    }
  }
  
  rememberCredentials(){
    let userCredentials = {
      "username": this.accountLogin.value.username,
      "password": this.accountLogin.value.password,
    };
    this.localstorageService.set('usercred',userCredentials);
  }

  forgetCredentials(){
     let userCredentials = {
      "username": '',
      "password": '',
    };
    this.accountLogin.value.rememberMe = false;
    this.localstorageService.set('usercred',userCredentials);
  }

  loadUserCredentials(){
    let usercred = this.localstorageService.get('usercred'); 
    
    if(typeof usercred != "undefined" && usercred != null){
      if(typeof usercred.username != "undefined" && typeof usercred.password != "undefined" && usercred.username != "" &&  usercred.password != ""){
        this.accountLogin.patchValue({
          "username": usercred.username,
          "password": usercred.password,
          "rememberMe": true
        });
      }
    }
  }


  login(){
    let thisObj = this;
    let userCredentials = {
      "username": this.accountLogin.value.username,
      "password": this.accountLogin.value.password,
    };

    this.ls.loginUser(userCredentials, function(response){

      if(response.status){

        if(thisObj.accountLogin.value.rememberMe){
          thisObj.rememberCredentials();
        }
        else{
          thisObj.forgetCredentials();
        }

        thisObj.loginMessage = '';
        thisObj.localstorageService.set('x-access-token',response.token);
        thisObj.localstorageService.set('userId',response.userId);
        thisObj.router.navigate(['/accountpage']);
      }
      else{
        thisObj.loginMessage = 'Invalid username or password';
      }
    });

    thisObj.router.navigate(['/accountpage']);
  }

  passwordVisibility(){
    if(this.hidePassword){
      this.hidePassword = false;
      this.hidePasswordIcon = "fa fa-eye";
    }
    else{
      this.hidePassword = true;
      this.hidePasswordIcon = "fa fa-eye-slash";
    }
  }

}