import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from './photo.modelo';
import { Injectable } from '@angular/core';


const httpOptions = {headers: new HttpHeaders({"Content-Type": "aplication/json;charset=utf-8"})}

@Injectable({providedIn : "root"})
export class PhotoService{

    constructor(private http:HttpClient){}

    listPhotos(){
        return this.http.get<Photo[]>("http://localhost:3000/photos", httpOptions);
    }
}