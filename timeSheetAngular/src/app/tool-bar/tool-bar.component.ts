import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor() { }

  @Output() newRecord = new EventEmitter<void>();
  @Output() saveRecord = new EventEmitter<void>();
  @Output() saveAndCloseRecord = new EventEmitter<void>();
  @Output() deleteRecord = new EventEmitter<void>();
  @Output() closeRecord = new EventEmitter<void>();

  onNewRecord(){
    this.newRecord.emit();
  }

  onSaveRecord(){
    this.saveRecord.emit();
  }
  onSaveAndCloseRecord(){
    this.saveAndCloseRecord.emit();
  }
  onDeleteRecord(){
    this.deleteRecord.emit();
  }

  onCloseRecord(){
    this.closeRecord.emit();
  }  

  ngOnInit() {
  }

}
