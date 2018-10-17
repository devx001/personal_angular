import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCpyXhc0aN0WnNuAJihOHqv0l7rcu6JaZQMlEROxCLUEvRidgaMsuDEG-T5frVUDVxPMCi6-_NvwVaVdHo'
    });
    return this.http.get(url,{headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=50')
            .pipe( map(data =>  data['albums'].items ));

  }

  getArtists(term:string){
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
            .pipe( map(data =>data['artists'].items));
  }

  getArtist(artistId:string){
    return this.getQuery(`artists/${artistId}`);
  }

}
