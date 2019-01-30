import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCwFTK5t_0m1tTODOyvPp4YCOr6Qsgcjzk9nBBQRPIJUZaR366gS2sdhfNda66-Qdl4GX5xY3NWWlc9WrM'
    })

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }
}
