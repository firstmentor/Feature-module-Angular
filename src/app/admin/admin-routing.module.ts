import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  {path:'',component:AdminComponent,
   children:[
     {path:'header',component:HeaderComponent},
     {path:'home',component:HomeComponent}

   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
