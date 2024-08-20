import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerApresentationComponent } from '../../components/banner-apresentation/banner-apresentation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerApresentationComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
