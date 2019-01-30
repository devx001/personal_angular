import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any[] = [];
  tracks: any[] = [];
  loadingArtista: boolean;
  loadingTracks: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtista = true;
    this.loadingTracks = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista( id )
      .subscribe((artista: any) => {
        this.artista = artista;
        this.loadingArtista = false;
      });
  }
  
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe((tracks: any) => {
        console.log(tracks);
        this.tracks = tracks;
        this.loadingTracks = false;
      });
  }

  ngOnInit() {
  }

}
