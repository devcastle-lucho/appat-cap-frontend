import { HttpHeaders } from "@angular/common/http";

export const BASE_ENDPOINT ='http://localhost:8085/api/v1';
//export const BASE_ENDPOINT ='/api/v1';

export const TOKEN ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRE1JTklTVFJBRE9SIiwiZXhwIjoxNjQ0NzI0OTg5LCJpYXQiOjE2NDQ3MjEzODl9.Prk6YaKOYBmUi3lGR-YEljtzkUarcDkDLreLMoFNNB2oqCuKUKsZ3PtNpNvFBzO2RvLjOoFY_NlA6N-jpvsfRQ';


export const HTTP_OPTIONS = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
     Authorization: 'Bearer '+ TOKEN
  })
}
