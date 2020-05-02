import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Property {
  public Name:string;
  public Area:number;
  public ZoneCount:number;
  public Zones:[];
  public ContractCount:number;
  public Contracts:[];
  public EstimatedMonthlyCost:number;

}

export class PropertyService {
  constructor() { }

  public getAllProperties() : Property[] {
    return [];
  }
}
