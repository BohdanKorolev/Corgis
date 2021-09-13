import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getCorgis() {
    return this.http.get('https://appcontent.fx2.io/api/content/frontend-test', {
      headers: {
        'Authorization': 'sg6QVn2Mgkwu3yAD3gCAgMW1sE4T9SUo'
      }
    })
  }
}
