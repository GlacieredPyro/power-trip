import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { MasterDataComponent } from "./pages/master-data/master-data.component"
import { PropertyOverviewComponent } from "./pages/properties/property-overview/property-overview.component"


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "masterdata", component: MasterDataComponent},
  {path: "properties-overview", component: PropertyOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
