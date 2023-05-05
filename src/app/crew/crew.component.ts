import { Component} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent {
  ArrayCrew:any;
  private _crew=0;

  constructor(private dataService:DataService){
    this.ArrayCrew=dataService.Crew;
  }

  getElement(){
    return this._crew;
  }

  setElement(value:number){
   this._crew=value;
  }

  ngOnInit() {
    console.log(this.ArrayCrew)
  }
}
