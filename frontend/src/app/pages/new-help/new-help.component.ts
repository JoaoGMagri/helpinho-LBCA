import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StorageService } from '../../service/storage.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { helpObj } from './arrayObj';
import { HelpComponent } from '../../components/help/help.component';

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
  loginStatus = this.storage.status();

  i = 3
  stepsArray = helpObj.stepsArray;
  typesArray = helpObj.typesArray;
  donateArray = helpObj.donateArray;
  descriptionArray = helpObj.descriptionArray;

  form = new FormGroup({
    type: new FormControl('', [Validators.required] ),
    donate: new FormControl(0, [Validators.required] ),
  });
  formInfo = new FormGroup({
    title: new FormControl('', [Validators.required] ),
    image: new FormControl('', [Validators.required] ),
    description: new FormControl('', [Validators.required] ),
  });

  ngOnInit(): void {
    if(!this.storage.status()){
      //this.router.navigateByUrl("/login")
    }
  }

  optionType(typeInput: any) {
    this.form.get("type")?.setValue(typeInput);
  }

  optionDonate(donateInput: any) {
    this.form.get("donate")?.setValue(donateInput);
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
    if(this.i == 2 && !this.form.get('donate')?.valid){
      console.log("Escolha um valor")
      return
    }
    this.i++;
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
    if(this.i == 2 && !this.form.get('donate')?.valid){
      console.log("Escolha um valor")
      return
    }

    this.i = newI
  }

  backHelp(){
    this.i--;
  }

  concludeHelp(){
    console.log("terminou")
  }

}