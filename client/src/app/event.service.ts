import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class EventService {
    private apiUri = 'http://localhost:3000/events';

    constructor(private http: HttpClient) {}

    getEvents(): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        });
        return this.http.get(this.apiUri /*{ headers }*/);
    }

    getEventDetail(id: string): Observable<Event> {
        return this.http.get<Event>(`${this.http}/${id}`);
    }
}

export interface Event {
    _id: string;
    title: string;
    author: string;
    content: string;
    publishedDate: Date;
    tags: [];
}
