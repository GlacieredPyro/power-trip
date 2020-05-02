import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MasterDataComponent } from './pages/master-data/master-data.component';
import { PropertyListComponent } from './pages/properties/property-list/property-list.component';
import { PropertyOverviewComponent } from './pages/properties/property-overview/property-overview.component';
import { PropertyDetailComponent } from   './pages/properties/property-detail/property-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MasterDataComponent,
    PropertyListComponent,
    PropertyOverviewComponent,
    PropertyDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
