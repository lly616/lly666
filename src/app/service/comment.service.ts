import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Response,Comment } from '../types';
import { environment } from 'src/environments/environment';

const jsonHeader = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
}

const normalHeader = {
  headers: new HttpHeaders({
    //'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createComment(data: any) {
    return this.http.post<any>('https://llylogicapp.azurewebsites.net:443/api/addreview/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OQHBenpNVRXOeKJNVAFz1cIpQhbxex1ZQCb0J_wG2Ao',data)
  }

  initComment(id: any) {
    return this.http.post<any>('https://llylogicapp.azurewebsites.net:443/api/showreview/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hU8La7CvAhPzmpqOW2Rekjrg5GBtjvHjTK2jn-iydnk',id)
  }
  delete(id: any) {
    return this.http.delete<any>('https://llylogicapp.azurewebsites.net/api/deletereview/triggers/manual/invoke/delete/'+id+'?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jI3oRMxeZ9ybNln-GDSujR7-0IhKhmGcOzERKd_uJOY')
  }
  like(data:any){
    return this.http.post<any>('https://llylogicapp.azurewebsites.net:443/api/addlike/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WL_4pyHJ-UDaSgBYu6OS3MlPrGyRgOOS5cJjp2r-_9c',data)

  }
  showlike(data:any){
    return this.http.post<any>('https://llylogicapp.azurewebsites.net:443/api/showlike/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2b9CadPTTVCVfJ9krmLHUEHCGI1401qUYaMPogoMmJU',data)

  }
}
