import { Component, OnInit } from '@angular/core';
import { PropertyService, Property } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties:Property[]

  constructor(private propService:PropertyService) { }

  ngOnInit() {
    this.properties = this.propService.getAllProperties();
  }

  reduce(col:string) : number {
    return +this.properties.map(i=>+i[col]).reduce((acc, next) => acc + next);
  }

}
