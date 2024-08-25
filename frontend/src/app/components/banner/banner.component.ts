import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserInfo } from '../../types/userApi-type';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  texts:string[] = ["Registro grátis", "Sem taxas", "Rápido e prático"]
  
  loginStatus = input();
  userInfo = input<UserInfo>()
 
}
