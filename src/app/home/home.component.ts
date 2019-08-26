import { Component, OnInit } from '@angular/core';
import { Button } from 'tns-core-modules/ui/button';
import { EventData } from 'tns-core-modules/ui/page/page';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'my-app';

  counter = 1;

  public editState = true;
  public texto = '';
  public buttonText = 'Disable editting of TextView';

  public showLoading: boolean;

  public isVisible: boolean = true;

  public userList: any;

  constructor(
    private _home: HomeService
  ) { }

  ngOnInit() {
    this.showLoading = true;

    this.getUsers();
  }


  getUsers() {
    this._home.testGet().subscribe(data => {
      console.log(data);

      this.userList = data['data'];

      this.showLoading = false;

    }, error => {
      console.log(error);

    });
  }


  onTap2() {
    if (this.isVisible) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }

  onTap(args: EventData) {
    let button = <Button>args.object;

    this.counter++;
    // alert('Le he dado clic ' + this.counter + ' veces!');
  }



  disableTextView() {
    if (this.editState) {
      this.editState = false;
      this.buttonText = 'Enable editting of TextView';
    } else {
      this.editState = true;
      this.buttonText = 'Disable editting of TextView';
    }
  }

  showText() {
    alert(this.texto);
    console.log(this.texto);
  }
}
