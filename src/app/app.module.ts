import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MagnifierDirective } from './magnifier.directive';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MagnifierDirective, AlbumComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
