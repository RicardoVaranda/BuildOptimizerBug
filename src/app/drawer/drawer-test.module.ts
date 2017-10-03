import { ToolbarModule, DrawerModule } from '@swimlane/ngx-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawerTestRoutingModule } from './drawer-test-routing.module';
import { DrawerTestComponent } from './drawer-test.component';

@NgModule({
  imports: [
    CommonModule,
    DrawerTestRoutingModule,
    DrawerModule,
    ToolbarModule
  ],
  declarations: [DrawerTestComponent]
})
export class DrawerTestModule { }
