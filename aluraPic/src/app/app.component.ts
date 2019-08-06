import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bem Vindo Alura Pic-Jocimar';

  Photos:Photo[];
  
  constructor(private PhotoServece:PhotoService){}

  ngOnInit():void {  

    this.PhotoServece.listPhotos().subscribe(  
      photo => this.Photos = photo
    )
  }

  }
