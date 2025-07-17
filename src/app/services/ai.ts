import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AiService {
  constructor(private http: HttpClient) {}

  askAI(message: string): Observable<{ response: string }> {
    return this.http.post<{ response: string }>(
      'http://localhost:3000/ask',   
      { message }
    );
  }
}
