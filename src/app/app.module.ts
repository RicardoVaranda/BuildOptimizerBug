import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DrawerModule, ToolbarModule } from '@swimlane/ngx-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DrawerModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
