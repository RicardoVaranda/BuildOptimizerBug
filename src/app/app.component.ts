import { Component, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import {DrawerService} from '@swimlane/ngx-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  @ViewChild('sampleTmpl') sampleTmpl: TemplateRef<any>;

  constructor(private drawerMngr: DrawerService) { }

  ngOnDestroy() {
    this.drawerMngr.destroyAll();
  }
  openDrawer() {
    this.drawerMngr.create({
      direction : 'bottom',
      template: this.sampleTmpl,
      size: 20
    });
  }
}
