import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbIconModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { NbIconComponent } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule,
    MdbModalModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }