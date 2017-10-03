import { Component, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import {DrawerService} from '@swimlane/ngx-ui';

@Component({
  selector: 'app-drawer-test',
  templateUrl: './drawer-test.component.html',
  styleUrls: ['./drawer-test.component.css']
})
export class DrawerTestComponent implements OnDestroy {

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
