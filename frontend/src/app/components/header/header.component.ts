import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../service/storage.service';
import { objUser } from '../../types/objUser-type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  storage = inject(StorageService);
  router = inject(Router);
  
  loginStatus = input();
  userObj: objUser= this.storage.userObj();

  onSubmit() {
    this.storage.clearStorage();
    this.router.navigateByUrl("/login")
  }
}