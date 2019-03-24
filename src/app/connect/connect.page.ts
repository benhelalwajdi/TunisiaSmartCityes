import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage {
  public Choise: string = 'Login';
  public Username: String;
  public password: String;


    constructor(
        private router: Router,
    ) {}

  signIn() {
      this.router.navigateByUrl( 'tabs');  }
}
