import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from './photo.modelo';
import { Injectable } from '@angular/core';


const httpOptions = {headers: new HttpHeaders({"Content-Type": "aplication/json;charset=utf-8"})}
//Fala pro angular que ele vai ser injetavel na raiz (root) da nossa aplicação
@Injectable({providedIn : "root"})
export class PhotoService{
    // contrutor com injeção de dependência.
    constructor(private http:HttpClient){}
    // um metodo que o httpClient busque as fotos no endereço e entregue para quem desejar...
    listPhotos(){
        return this.http.get<Photo[]>("http://localhost:3000/photos", httpOptions);
    }
}