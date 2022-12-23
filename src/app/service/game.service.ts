import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../types';
import { Response } from '../types';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const jsonHeader = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Accept': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token')
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
export class GameService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  upload(data: any) {
    return this.http.post<Response>(this.baseUrl + 'upload',data,jsonHeader)
  }

  createGame(data: any) {
    return this.http.post<any>('https://llylogicapp.azurewebsites.net:443/api/addvideo/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=m7TkVg7f1Wmkb4TbfcTfpVAuFsJDI42T7BbiA4APy7o',data)
  }

  initOwnGame() {
    return this.http.get<any>('https://llylogicapp.azurewebsites.net:443/api/showlly/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LSIAn7TOadJ-ql554LRaXijpypT9uMCjulBrVZQ4xzM')
  }

  getGameInfo(id: any) {
    return this.http.post<any>('https://llylogicapp.azurewebsites.net:443/api/llydetail/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=BAy1ycAY8C0osSMjTTbibE5EROVmyixPVUVPV3CRR4o',id)
  }

  deleteGame(id: string) {
    return this.http.delete<Response>(this.baseUrl + 'game?_id=' + id,normalHeader)
  }

  updateGame(data: Game) {
    return this.http.put<Response>(this.baseUrl + 'game',data,jsonHeader)
  }
  delete(data: any) {
    return this.http.delete<any>('https://llylogicapp.azurewebsites.net/api/deletevideo/triggers/manual/invoke/delete/'+data+'?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=VNPwE4TVkKzlkOjODl04rPmnNln66xJPBHBWssytGL8')
  }
}
