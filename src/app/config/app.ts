import { HttpHeaders } from "@angular/common/http";

export const BASE_ENDPOINT ='http://localhost:8085/api/v1';
//export const BASE_ENDPOINT ='/api/v1';

export const TOKEN ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRE1JTklTVFJBRE9SIiwiZXhwIjoxNjQ0NzE5MzcyLCJpYXQiOjE2NDQ3MTU3NzJ9.4STYgAQIf5CySorVtxHZMODCOzMPEcHZiCnjF6VypoybmgYEI8x92mAo_mW506H6Hq3C5DYf_lBaY7iab37H_Q';


export const HTTP_OPTIONS = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
     Authorization: 'Bearer '+ TOKEN
  })
}
