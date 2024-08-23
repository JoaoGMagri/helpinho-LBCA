import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  httpClient = inject(HttpClient)
  router = inject(Router)



  form = new FormGroup({
    name: new FormControl('', [Validators.required] ),
    email: new FormControl('', [Validators.required, Validators.email] ),
    number: new FormControl('', [Validators.required] ),
    date: new FormControl('', [Validators.required] ),
    password: new FormControl('', [Validators.required] ),
  })

  
  onSubmit() {
    const isFormValid = this.form.valid

    console.log(this.form.controls.date.value)
    if(isFormValid){
      let teste = {
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        number: this.form.controls.number.value,
        date: this.form.controls.date.value,
        password: this.form.controls.password.value
      };
      this.httpClient.post('api/user', teste).subscribe(() => {
        this.router.navigateByUrl("/login")
      });

    }
  }
}
