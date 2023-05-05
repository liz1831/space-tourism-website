import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data:any;

  constructor(private http:HttpClient) { }
  /*
  getDatos(): Observable<any>{
    return this.http.get('../assets/json/data.json');
  }

  */
 getData(){
  return new Promise((resolve, reject) => {
    this.http.get('../assets/json/data.json')
    .subscribe(data =>{
      this._data =data;
      resolve(true);
    }, error=>{
      console.log("Error al obtener la configuración: "+error);
      reject(true);
    });
  })
 }

 //variables de ficheros
 get Destination(){
  return this._data["destinations"];
 }

 get Crew(){
  return this._data["crew"];
 }
 
 get Technology(){
  return this._data["technology"];
 }
}

