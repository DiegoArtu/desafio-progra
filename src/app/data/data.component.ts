import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NasaserviceService } from '../services/nasaservice.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  nasaimg:any = {};
  key:any;
  pokemons:any;

  constructor(private Nasaservice: NasaserviceService,
    private pokemonService:PokemonService,
    private router:Router) { }

  ngOnInit(): void {

    this.key = localStorage.getItem('token');
    JSON.stringify(this.key)

    this.Nasaservice.nasaImg().subscribe((resp:any) =>{
      this.nasaimg = resp;
      console.log(this.nasaimg)
    });


    this.pokemonService.getPokemon().subscribe((resp:any) =>{
      console.log(resp.results);
      this.pokemons = resp.results;
    })
  }


  goBack(){
    this.router.navigate(['/account/login'])
    localStorage.clear();
  }

}
