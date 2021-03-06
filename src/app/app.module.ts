import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DelonMockModule } from '@delon/mock';

import * as MOCKDATA from '../../mock';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from '@routes/routes.module';


// 只对开发环境有效
// import { environment } from '../environments/environment.web';
// const MOCKMODULE = !environment.production ? [ DelonMockModule.forRoot({ data: MOCKDATA }) ] : [];
const MOCKMODULE = DelonMockModule.forRoot({ data: MOCKDATA });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MOCKMODULE,
    LayoutModule,
    RoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
