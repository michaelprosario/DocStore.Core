import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [    
      {
        label: 'Posts',
        icon: 'pi',
        routerLink: '/app/list-post'          
      },
      {
        label: 'Pages',
        icon: 'pi',
        routerLink: '/app/list-page'          
      }
    ];
  }
}
