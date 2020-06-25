import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AnyDataService } from 'src/app/any-data.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  ngOnInit(): void {}
  constructor( private dataService : AnyDataService) {
    this.getDataURL();
  }

  dataURL = [];
  pokemonsURL = [];
  pokeAllData = [];
  pokeFinalData = [];

  generationSelected = 'All';
  typeSelected = 'All';

  listGenerations = ['All', 'I Gen', 'II Gen', 'III Gen', 'IV Gen', 'V Gen', 'VI Gen', 'VII Gen'];
  listTypes = ['All', 'normal', 'grass', 'fire', 'water', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'steel', 'fairy'];

  async getDataURL(): Promise<void>{
    this.dataURL = await this.dataService.getDataURL();

    for(let i=0; i<this.dataURL.length; i++){
      await axios.get(this.dataURL[i].url)
        .then(response => {
          this.pokeAllData.push(response.data);
          this.pokeFinalData.push(response.data);
        })
    }
  }

  getGeneration(){
    
    this.pokeFinalData = [];
   
    if(this.generationSelected != 'All'){
      if(this.generationSelected == 'I Gen'){
        this.pokeFinalData = this.pokeAllData.slice(0, 151);
      }
      else if(this.generationSelected == 'II Gen'){
        this.pokeFinalData = this.pokeAllData.slice(151, 251);
      }
      else if(this.generationSelected == 'III Gen'){
        this.pokeFinalData = this.pokeAllData.slice(251, 386);
      }
      else if(this.generationSelected == 'IV Gen'){
        this.pokeFinalData = this.pokeAllData.slice(386, 493);
      }
      else if(this.generationSelected == 'V Gen'){
        this.pokeFinalData = this.pokeAllData.slice(494, 649);
      }
      else if(this.generationSelected == 'VI Gen'){
        this.pokeFinalData = this.pokeAllData.slice(649, 721);
      }
      else{
        this.pokeFinalData = this.pokeAllData.slice(721, 807);
      }
      
    }
    else{
      this.pokeFinalData = this.pokeAllData;
    }
  }

  getType(){
    this.pokeFinalData = [];
    console.log(this.generationSelected);
    if(this.typeSelected != 'All'){
      this.pokeAllData.forEach(pokemon => {
        let filter = pokemon.types.some(type => type.type.name == this.typeSelected);
        if(filter){
          this.pokeFinalData.push(pokemon);
        }
      })
    }
  }


  

 

}
