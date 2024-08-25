import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HelpContainerComponent } from '../../components/help-container/help-container.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { cardHelp } from '../../types/cardHelp-type';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HelpContainerComponent],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  route = inject(ActivatedRoute);
  httpClient = inject(HttpClient)
  storage = inject(StorageService)
  loginStatus = this.storage.status();
  
  help: cardHelp = {
    id: "",
    title: "",
    description: "",
    type: "",
    image: "",
    urgent: false,
    gols: "",
    author: {
        id: "",
        name: "",
        email: "",
        image: "",
    },
    supporters: [],
  }

  ngOnInit(): void {
    const helpId = this.route.snapshot.params['id'];
    
    this.httpClient.get<cardHelp>('api/help/'+ helpId).subscribe((helps) => {
      this.help = helps
      console.log(this.help)
    });
  }
}
