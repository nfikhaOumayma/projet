import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { ListbateauxComponent } from './listbateaux/listbateaux.component';

const routes: Routes = [
{path:'aboutus', component:AboutusComponent},
{path:'listbateaux', component:ListbateauxComponent},
{path:'contactus', component:ContactusComponent},
{path:'', redirectTo:'aboutus', pathMatch:'full'},
{path:'**', title:'Error',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
