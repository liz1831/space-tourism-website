import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {

  ArrayTechnology:any;
  _technology=0;

  constructor(private dataservice:DataService){
    this.ArrayTechnology=dataservice.Technology;
  }

  getElement(){
    return this._technology;
  }

  setElement(value:number){
   this._technology=value;
  }
  ngOnInit() {
    console.log(this.ArrayTechnology)
  }

}
