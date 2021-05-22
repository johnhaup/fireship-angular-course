import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MagnifierDirective } from './magnifier.directive';
import { AlbumComponent } from './album/album.component';
import { CommonModule } from '@angular/common';
import { CoolModule } from './cool/cool.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagnifierDirective,
    AlbumComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, CoolModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
