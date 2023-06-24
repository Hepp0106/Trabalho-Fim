import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {

  constructor(private http: HttpClient) { }

  localizaImgPet(cod:string): Observable<any>{
    const url = 'https://dog.ceo/api/breeds/image/random';

    const header ={
      //Ultima codigo
    }

  }

}
