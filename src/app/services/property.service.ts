import { Injectable, OnInit } from '@angular/core';

export class Property {
  public Id:number;
  public Name:string;
  public Area:number;
  public ZoneCount:number;
  public Zones:[];
  public ContractCount:number;
  public Contracts:[];
  public EstimatedMonthlyCost:number;

  constructor(args:any[]) {
    this.Id = args[0];
    this.Name = args[1];
    this.Area = args[2];
    this.ZoneCount = args[3];
    this.Zones = args[4];
    this.ContractCount = args[5];
    this.Contracts = args[6];
    this.EstimatedMonthlyCost = args[7];
  }
}

@Injectable({
  providedIn: 'root'
})
export class PropertyService implements OnInit {
  
  private properties:Property[]

  constructor() {
    this.properties = [
      new Property([1, "Steel Processing (Pta)", 1200, 5, [], 2, [], 64000]),
      new Property([2, "Granny Flat (Centurion)", 45, 1, [], 1, [], 700]),
      new Property([2, "Storage Container", 12, 1, [], 1, [], 2000])
    ];
  }

  ngOnInit() {
    
  }

  public getAllProperties() : Property[] {
    return this.properties;
  }

  getProperty(id: number): Property {
    return this.properties.filter(p => p.Id == id)[0];
  }
}
