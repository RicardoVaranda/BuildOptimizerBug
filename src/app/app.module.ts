import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'drawer', loadChildren: './drawer/drawer-test.module#DrawerTestModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
