import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ProfileService {
    private base = "https://coding-bank.fly.dev";

    constructor(private http: HttpClient) {}
    
    getClientCode() {
        this.http.get(`${this.base}/auth/current-user`, {
            headers: { 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MTQ5MzU1OSJ9.CpoQJh6AJNAMohhU622-btRNohdLt6OgZtV0qcSaWGA'}
        }).subscribe( (res) => {
            console.log(res);
        })
    }
    
}