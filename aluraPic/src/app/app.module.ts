import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Minhas importaçãoes daqui para baixo.
import { PhotosModule } from './photos/photos.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';




@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
