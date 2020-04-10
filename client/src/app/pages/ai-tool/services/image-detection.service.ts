import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../@base/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class ImageDetectionService extends BaseApiService<any> {

  constructor(public http: HttpClient) {
    super(http, 'ai-tool/image-detect')
   }
}
