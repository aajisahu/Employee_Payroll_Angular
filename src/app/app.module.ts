import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetails } from './service/user-details';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashBoardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
