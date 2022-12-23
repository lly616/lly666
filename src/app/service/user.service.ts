import { Injectable } from '@angular/core';
import { Register,Login,Response } from '../types';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const jsonHeader = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('token')
  })
}

const normalHeader = {
  headers: new HttpHeaders({
    'authorization': 'Bearer ' + localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  register(data: Register) {
    return this.http.post<any>('https://llylogicapp.azurewebsites.net:443/api/register/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NFhdTwAS4WZ-O5sQLjsn8ErDLmmfIdI_Gh7fLdZ_edg',data)
  }

  login(data: Login){
    return this.http.post<any>('https://llylogicapp.azurewebsites.net:443/api/login/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=l4So_Y1Qn8VWEYT1RAcWejbk7v4oN5-BuIW1fTeTlLY',data)
  }

  getUserInfo(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + 'user',normalHeader)
  }

  updateUser(data: {name: string}): Observable<Response> {
    return this.http.put<Response>(this.baseUrl + 'user',data,normalHeader)
  }
}
