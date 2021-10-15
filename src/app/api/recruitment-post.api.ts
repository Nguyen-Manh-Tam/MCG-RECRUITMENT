import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpWrapper } from './http-wrapper';
import { environment } from './../../environments/environment';

@Injectable()
export class RecruitmentPostApi extends HttpWrapper {
  constructor(http: HttpClient) {
    super(http, `${environment.RecApiUrl}/recruitmentpostdata`);
  }
}