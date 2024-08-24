import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  httpClient = inject(HttpClient);
  router = inject(Router);
  storage = inject(StorageService);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl('', [Validators.required] ),
  })

  onSubmit() {
    if(this.form.valid){
      let body = {
        email: this.form.controls.email.value,
        password: this.form.controls.password.value
      };
      this.httpClient.post('api/auth', body).subscribe((res) => {
        this.storage.saveStorage(res);
        this.router.navigateByUrl("/")
      });
    } 
  }
}
