import {Injectable, Injector} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * http服务
 */
@Injectable()
export class _HttpClient {
  constructor(
    private http: HttpClient
  ) {
  }

  get(url, params = {}) {
    return this.http.get(url,  params);
  }
}
