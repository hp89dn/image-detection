import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../@base/base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService extends BaseApiService<any> {

  constructor(public http: HttpClient) {
    super(http, `upload-image`);
   }
}
