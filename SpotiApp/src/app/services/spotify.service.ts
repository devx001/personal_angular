import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
 
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAACRA-q8ku6vAyr_ruxv0eyZml_yU2Rq46N2WA_-DmxcVMweQk8UoCN6YBAuvEnQh4WU1EzWTAcOeg4P0'
    })
    return this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20", { headers })
      .pipe(map((data:any) => {
        return data.albums.items;
      }));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAACRA-q8ku6vAyr_ruxv0eyZml_yU2Rq46N2WA_-DmxcVMweQk8UoCN6YBAuvEnQh4WU1EzWTAcOeg4P0'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map((data: any) => {
        return data.albums.items;
      }));
  }
}
