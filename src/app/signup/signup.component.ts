import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateform';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash"
  signupForm!:FormGroup;
  submittedValue:any;
  submittedValid: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private login: LoginService){}
  
  ngOnInit():void{
    this.signupForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName:  ['',Validators.required],
      email:  ['',Validators.required],
      username:  ['',Validators.required],
      password:  ['',Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value); 
      this.submittedValue = this.signupForm.value;
      console.log(this.submittedValue.username)
      this.login.sharedData = this.signupForm.value.username;
      console.log("data:" + this.login.sharedData);
      this.submittedValid = true;    
      setTimeout(() => {
        this.loading = true;
          this.router.navigate(['']);
        }, 3000); 
    } else {
      alert("Your form is invalid");
      ValidateForm.validateAllFormFileds(this.signupForm);
    }
  }



}
