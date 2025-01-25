import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BikeService } from 'src/bikeService';

@Injectable({
  providedIn: 'root'
})
export class BikeServiceService {
  
  private apiUrl = 'http://localhost:8081/admin/service'; // Backend API URL

  constructor(private http: HttpClient) {}

  getPendingBikeServices(){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<BikeService[]>(`${this.apiUrl}/pending`, { headers });
  }

  updateBikeServiceStatus(id: String, status: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { serviceStatus: status };

    return this.http.patch(`${this.apiUrl}/bike/${id}`, body, { headers });
  }
}
