import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CardUrgentComponent } from '../../components/card-urgent/card-urgent.component';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../service/storage.service';
import { cardHelp } from '../../types/cardHelp-type';
import { Router } from '@angular/router';
import { objUser } from '../../types/objUser-type';
import { UserInfo } from '../../types/userApi-type';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HelpContainerComponent } from '../../components/help-container/help-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerComponent, CardComponent, CardUrgentComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  router = inject(Router);
  httpClient = inject(HttpClient)
  storage = inject(StorageService)
  loginStatus = this.storage.status();
  userObj: objUser= this.storage.userObj();
  
  helpArry: cardHelp[] = [];
  helpArryFilter:cardHelp[] = [];
  userInfo: UserInfo = {
    id: "",
    name: "",
    email: "",
    password: "",
    date: "",
    number: "",
    image: "",
    donateParticipation: 0,
    donateValue: 0,
    helpCreated: 0
  };
  instructions = [
    {
      title: "Escolha",
      description: "Escolha um helpinho que deseja ajudar"
    },
    {
      title: "Doe",
      description: "O valor é você quem decide, e ele vai todo para quem escolher"
    },
    {
      title: "Aproveite",
      description: "Doar gera felicidade para você e para quem recebeu"
    },
    {
      title: "Acompanhe",
      description: "Fique ligado, acompanhe se o helpinho alcançou o objetivo"
    }
  ]
  
  form = new FormGroup({
    search: new FormControl(''),
    type: new FormControl('')
  })

  ngOnInit():void {
    this.httpClient.get<UserInfo>('api/user/'+this.userObj.userId, {headers: {setHeaders: this.userObj.token}}).subscribe((res) => {
      this.userInfo = res
      this.httpClient.get<cardHelp[]>('api/help').subscribe((helps) => {
        this.helpArry = helps
        this.helpArryFilter = helps
      });
    });
  }

  helpPages(id: string){
    this.router.navigateByUrl('/help/' + id);
  }
  

  onSubmit() {
    const search = this.form.controls.search.value
    const type = this.form.controls.type.value

    if(type){
      this.helpArryFilter = this.helpArry.filter( help => help.type === type)
    } else{
      this.helpArryFilter = this.helpArry
    }

    if(search){
      this.helpArryFilter = this.helpArryFilter.filter( help => help.title === search)
    }

  }

}