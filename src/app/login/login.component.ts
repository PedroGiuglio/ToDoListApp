import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateform';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash"
  loginForm!:FormGroup;
  loading: boolean = false;
  dato:string="holas";
  constructor(private fb: FormBuilder, private router: Router, private login: LoginService){}

  ngOnInit():void{
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })

    this.dato = this.login.sharedData;
    console.log("Dato recibido:" + JSON.stringify(this.dato));
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.loading = true;
      //send the obj to database
      console.log(this.loginForm.value);
      this.login.sharedData = this.loginForm.value;
      setTimeout(() => {
      this.loading = true;
        this.router.navigate(['work']);
      }, 3000);
    } else {
      //throw the error using toaster
      ValidateForm.validateAllFormFileds(this.loginForm)
      alert("Your form is invalid");
    }
  }



}
