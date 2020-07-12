import { Component, OnInit } from '@angular/core';

enum InfoBarState {
  ShowMessage = 1,
  ShowTimeStamp,
  ShowErrors
}

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {
  
  errors: string[]
  message: string;
  userName: string;
  state: InfoBarState;
  timeStamp: string;

  constructor() { }
  
  ngOnInit() {
  }

  public displayErrors(errors: string[]){
    this.errors = errors;
    this.state = InfoBarState.ShowErrors;
  }

  public displayInfo(message: string){
    this.message = message;
    this.state = InfoBarState.ShowMessage;
  }

  public displayTimeStamp(userName: string, timeStamp: string) {
    this.userName = userName;
    this.timeStamp = timeStamp;
    this.state = InfoBarState.ShowTimeStamp;
  }
}
