import { HttpHeaders } from "@angular/common/http";

//export const BASE_ENDPOINT ='http://localhost:8085/api/v1';
export const BASE_ENDPOINT ='/api/v1';

export const TOKEN ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRE1JTklTVFJBRE9SIiwiZXhwIjoxNjQ0NDYxNTIzLCJpYXQiOjE2NDQ0NTc5MjN9.Br18caawkmgyMKYYJIS-VBZqNci7QJIjBbFonCooJrodHURgor4WLxBnAXCNwNJMuBXkg5aNfccIRs-AQJ78JQ';


export const HTTP_OPTIONS = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
     Authorization: 'Bearer '+ TOKEN
  })
}
