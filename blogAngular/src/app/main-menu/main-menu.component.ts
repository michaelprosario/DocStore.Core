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
        label: 'Content',
        expanded: true,
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'Posts',
          icon: 'pi',
          expanded: true,
          items: [
            { label: 'Add post', icon: 'pi' },
            { label: 'Posts', icon: 'pi' }
          ]
        },
        {
          label: 'Pages',
          icon: 'pi',
          items: [
            { label: 'Add page', icon: 'pi' },
            { label: 'Page', icon: 'pi' }
          ]
        },
        ]
      },

    ];
  }
}
