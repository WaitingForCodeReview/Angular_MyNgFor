import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNgForTestComponent } from './my-ng-for-test/my-ng-for-test.component';
import { NgForObjectDirective } from './directives/ng-for-object.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyNgForTestComponent,
    NgForObjectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
