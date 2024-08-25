import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StorageService } from '../../service/storage.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { helpObj } from './arrayObj';
import { HelpComponent } from '../../components/help/help.component';
import { objUser } from '../../types/objUser-type';
import { cardHelp } from '../../types/cardHelp-type';
import { NonNullAssert } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-help',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HelpComponent ,ReactiveFormsModule],
  templateUrl: './new-help.component.html',
  styleUrl: './new-help.component.css'
})
export class NewHelpComponent {
  router = inject(Router);
  storage = inject(StorageService)
  httpClient = inject(HttpClient);
  loginStatus = this.storage.status();
  userObj: objUser= this.storage.userObj();
  
  helpFinal = {
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
  };
  i = 0;
  stepsArray = helpObj.stepsArray;
  typesArray = helpObj.typesArray;
  donateArray = helpObj.donateArray;
  descriptionArray = helpObj.descriptionArray;

  form = new FormGroup({
    type: new FormControl<string>('', {nonNullable: true, validators:[Validators.required]} ),
    gols: new FormControl('',{nonNullable: true, validators:[Validators.required]} ),
  });
  formInfo = new FormGroup({
    title: new FormControl('', {nonNullable: true, validators:[Validators.required]} ),
    image: new FormControl('', {nonNullable: true, validators:[Validators.required]} ),
    description: new FormControl('', {nonNullable: true, validators:[Validators.required]} ),
  });

  ngOnInit(): void {
    if(!this.storage.status()){
      this.router.navigateByUrl("/login")
    }
  }

  optionType(typeInput: any) {
    this.form.get("type")?.setValue(typeInput);
  }

  optionDonate(donateInput: any) {
    this.form.get("gols")?.setValue(donateInput);
  }

  advanceHelp(){
    if(this.i == 0 && !this.form.get('type')?.valid){
      console.log("Escolha um tipo")
      return
    }
    if(this.i==1 && !this.formInfo.valid){
      console.log("preencha os campos")
      return
    }
    if(this.i == 2 && !this.form.get('gols')?.valid){
      console.log("Escolha um valor")
      return
    }
    this.i++;
    this.createdHelp();
  }

  selectHelp(newI: number){
    if(this.i == 0 && !this.form.get('type')?.valid){
      console.log("Escolha um tipo")
      return
    }
    if(this.i==1 && !this.formInfo.valid && newI > this.i){
      console.log("preencha os campos")
      return
    }
    if(this.i == 2 && !this.form.get('gols')?.valid){
      console.log("Escolha um valor")
      return
    }

    this.i = newI
    this.createdHelp();
  }

  backHelp(){
    this.i--;
  }

  createdHelp(){
    this.helpFinal = {
      id: "",
      title: this.formInfo.controls.title.value,
      description: this.formInfo.controls.description.value,
      type: this.form.controls.type.value,
      image: this.formInfo.controls.image.value,
      urgent: false,
      gols: this.form.controls.gols.value,
      author: {
        id: this.userObj.id,
        name: this.userObj.name,
        email: this.userObj.email,
        image: this.userObj.image,
      },
      supporters: [],
    }
    console.log(this.helpFinal)
  }

  concludeHelp(){
    const body = {
      title: this.formInfo.controls.title.value,
      description: this.formInfo.controls.description.value,
      type: this.form.controls.type.value,
      gols: this.form.controls.gols.value,
      image: this.formInfo.controls.image.value,
      urgent: false,
      supportes: []
    }

    this.httpClient.post('api/help', body, {headers: {setHeaders: this.userObj.token}}).subscribe((res) => {
      this.router.navigateByUrl("/");
    });
    console.log("terminou")
  }

}