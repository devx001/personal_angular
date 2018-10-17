import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  busquedaHeroes:Heroe[]= [];
  busqueda:string="";

  constructor(private _activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.busqueda = params['buscar'];
      this.busquedaHeroes=this._heroesService.buscarHeroes(this.busqueda);
    });
  }

}
