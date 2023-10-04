import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registrationForm: FormGroup = new FormGroup({});
  passwordMismatch = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const { username, password, confirmPassword } = this.registrationForm.value;

      if (password !== confirmPassword) {
        this.passwordMismatch = true;
        return;
      }

      // Save data to local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert("data store in local storage")

      // Clear form and error message
      this.registrationForm.reset();
      this.passwordMismatch = false;
    }
  }

  login=new FormGroup({
    uname:new FormControl("username",[Validators.required,Validators.minLength(8),]),
    password:new FormControl("Enter password",[Validators.required,Validators.minLength(8)]),
    date:new FormControl("Enter Date of Birth",[Validators.required]),
    email:new FormControl("ajay@gmail.com",Validators.required)
  })

shows(){
  console.log(this.login)
}
formes(un: any,p:any,group:any){
  console.log(un);
  console.log(p);
  console.log(group)
} 



// jjj





}


