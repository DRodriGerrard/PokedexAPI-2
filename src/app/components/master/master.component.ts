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

  pokeAllData = [];
  pokeFinalData = [];

  generationSelected = 'All';
  typeSelected = 'All';

  listGenerations = ['All', 'I Gen', 'II Gen', 'III Gen', 'IV Gen', 'V Gen', 'VI Gen', 'VII Gen'];
  listTypes = ['All', 'normal', 'grass', 'fire', 'water', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'steel', 'fairy'];

  async getDataURL(): Promise<void>{
    const dataURL = await this.dataService.getDataURL();
    
    for(let i=0; i<dataURL.length; i++){
      await axios.get(dataURL[i].url)
        .then(response => {
          this.pokeAllData.push(response.data);
          this.pokeFinalData.push(response.data);
        })
    }
  }

  getGeneration(){
    
    let pokeGenData = [];
   
    if(this.generationSelected != 'All'){
      if(this.generationSelected == 'I Gen'){
        pokeGenData = this.pokeAllData.slice(0, 151);
      }
      else if(this.generationSelected == 'II Gen'){
        pokeGenData = this.pokeAllData.slice(151, 251);
      }
      else if(this.generationSelected == 'III Gen'){
        pokeGenData = this.pokeAllData.slice(251, 386);
      }
      else if(this.generationSelected == 'IV Gen'){
        pokeGenData = this.pokeAllData.slice(386, 493);
      }
      else if(this.generationSelected == 'V Gen'){
        pokeGenData = this.pokeAllData.slice(494, 649);
      }
      else if(this.generationSelected == 'VI Gen'){
        pokeGenData = this.pokeAllData.slice(649, 721);
      }
      else{
        pokeGenData = this.pokeAllData.slice(721, 807);
      }
    }
    else{
      pokeGenData = this.pokeAllData;
    }
    this.getType(pokeGenData);
  }

  getType(genData:any[]){
    this.pokeFinalData = [];
    
    if(this.typeSelected != 'All'){
      genData.forEach(pokemon => {
        const filter = pokemon.types.some(type => type.type.name == this.typeSelected);
        if(filter){
          this.pokeFinalData.push(pokemon);
        }
      })
    }
    else{
      this.pokeFinalData = genData;
    }
  }


  

 

}
