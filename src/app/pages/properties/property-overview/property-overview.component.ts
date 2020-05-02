import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService, Property } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss']
})
export class PropertyOverviewComponent implements OnInit {

  selectedProperty:Property
  selectedPropertyId:number

  constructor(private route: ActivatedRoute,
    private propService:PropertyService) { }

  ngOnInit() {
    this.loadFromURI();
  }

  loadFromURI() {
    this.selectedProperty = null;
    var selectedPropertyId = this.route.snapshot.params?.id;
    if(selectedPropertyId) {
      this.selectedProperty = this.propService.getProperty(selectedPropertyId);
    }
    console.log(this.selectedProperty)
  }
}
