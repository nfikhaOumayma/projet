import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
const URL = 'http://localhost:3000/bateau';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor(private http:HttpClient) { }

getformulaire():Observable<Form[]>{
  return this.http.get<Form[]>(URL);
}



}
