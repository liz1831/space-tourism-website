import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})

export class DestinationComponent implements OnInit{
  ArrayDestination:any;
  private _element= 0;

  constructor(private dataService: DataService) {
    this.ArrayDestination=dataService.Destination;

  }

  getElement(){
    return this._element;
  }

  setElement(value:number){
   this._element=value;
  }
  ngOnInit() {
    console.log(this.ArrayDestination)
  }
}
