import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../storage/session-storage.service';
import { SESSION_STORAGE } from '../../constants/session-storage.constant';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiURL = environment.apiURL;
  configData: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  config(): Observable<any> {
    const configuration = this.getConfigData();
    if (configuration) {
      return of(configuration);
    }
    return this.http
      .post<any>(this.apiURL + '/config', '')
      .pipe(retry(0), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
  public setConfigData(response: any) {
    this.configData = response;
  }
  public getConfigData() {
    return this.configData;
  }
}
