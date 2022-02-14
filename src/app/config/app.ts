import { HttpHeaders } from "@angular/common/http";

export const BASE_ENDPOINT ='http://localhost:8085/api/v1';
//export const BASE_ENDPOINT ='/api/v1';

export const TOKEN ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRE1JTklTVFJBRE9SIiwiZXhwIjoxNjQ0ODA4OTk5LCJpYXQiOjE2NDQ4MDUzOTl9.zswEO7vDhJYStMgBofX4uxSPiN8vHCP1Sg8zAxesznXsESknVRNOAlZZSMlul4ntNwA03U-ememALMTo3-XMUA';


export const HTTP_OPTIONS = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
     Authorization: 'Bearer '+ TOKEN
  })
}
