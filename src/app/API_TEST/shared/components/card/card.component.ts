import { Component,OnInit } from '@angular/core';
import { HeroeDataService } from "../../../services/heroe-data.service";
import { heroe } from "../../../models/heroes.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  data:any
  constructor(private heroeData:HeroeDataService){}

  ngOnInit(): void {
    this.heroeData.getDataSuperHeroes().subscribe(response =>       
      this.data = response)
  }

}
