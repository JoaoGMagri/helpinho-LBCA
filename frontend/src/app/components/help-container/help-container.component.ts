import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { cardHelp } from '../../types/cardHelp-type';
import { objUser } from '../../types/objUser-type';
import { StorageService } from '../../service/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-help-container',
  standalone: true,
  imports: [],
  templateUrl: './help-container.component.html',
  styleUrl: './help-container.component.css'
})
export class HelpContainerComponent {
  help =  input<cardHelp>();
  router = inject(Router);
  route = inject(ActivatedRoute);
  httpClient = inject(HttpClient);
  storage = inject(StorageService);
  userObj: objUser= this.storage.userObj();
  idHelp = this.route.snapshot.params['id']

  @Output() helpUpdate = new EventEmitter();

  ngSubmit():void {
    const body = {
      helpId: this.idHelp,
      "donate": 100
    }

    this.httpClient.post('api/donate', body, {headers: {setHeaders: this.userObj.token}}).subscribe( (res) => {
      this.helpUpdate.emit();
    });
  }
}
