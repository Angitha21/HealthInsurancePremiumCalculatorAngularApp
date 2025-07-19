import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { PremiumRequest } from 'src/PremiumReq';
import { PremiumResponse } from 'src/PremiumReq';

@Injectable({
  providedIn: 'root'
})
export class PremiumService {

  private apiUrl='https://localhost:7039/api/PremiumCalculator';

  constructor(private http:HttpClient) { }

  getPremium(premiumReq: PremiumRequest):Observable<PremiumResponse> {
    console.log("Sending premium request:", premiumReq);

    return this.http.post<PremiumResponse>(this.apiUrl,premiumReq);
  }
}
