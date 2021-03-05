import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

const jsonOfertaUrl = 'assets/json/ofertas.json';

@Injectable()
export class DataService {


    constructor(private http: HttpClient) { } 

    fetchJson(): Observable<Object> {
        return this.http.get(jsonOfertaUrl);
    }
}