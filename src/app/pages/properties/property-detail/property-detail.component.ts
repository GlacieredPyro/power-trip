import { Component, OnInit, Input } from '@angular/core';
import { Property, PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  @Input("property-model") property:Property;
  @Input("property-id") propertyId:number;

  constructor(private route:ActivatedRoute,
     private propService:PropertyService) { }

  ngOnInit(): void {
    this.property = this.propService.getProperty(this.route.snapshot.params?.id);
  }

}
