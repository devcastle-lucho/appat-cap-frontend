import { HttpHeaders } from "@angular/common/http";

export const BASE_ENDPOINT ='http://localhost:8085/api/v1';
//export const BASE_ENDPOINT ='/api/v1';

export const TOKEN ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRE1JTklTVFJBRE9SIiwiZXhwIjoxNjQ0NDY1NDc3LCJpYXQiOjE2NDQ0NjE4Nzd9.yQaDCe-bJQ9uOhdW4ZpBZ_r6KW12PXVVvQMnnXF-M3OIQg71-VPckEAgCA6ZYucOMRoghQBGYQ5Jg-QhaGeJhg';


export const HTTP_OPTIONS = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
     Authorization: 'Bearer '+ TOKEN
  })
}
