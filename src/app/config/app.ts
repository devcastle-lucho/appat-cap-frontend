import { HttpHeaders } from "@angular/common/http";

export const BASE_ENDPOINT ='http://localhost:8085/api/v1';
//export const BASE_ENDPOINT ='/api/v1';

export const TOKEN ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRE1JTklTVFJBRE9SIiwiZXhwIjoxNjQ0ODA0OTQ2LCJpYXQiOjE2NDQ4MDEzNDZ9.L4g---KlxXpM7I9IlysRvo64yby6N3jEwmuoDr9qHiUWp3M-o7jn0knbvwhi1n8ok0YfGZMzPnCHM49k4bkxlQ';


export const HTTP_OPTIONS = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
     Authorization: 'Bearer '+ TOKEN
  })
}
