import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamionsComponent } from './camions/camions.component';
import { AddCamionComponent } from './add-camion/add-camion.component';
import { UpdateCamionComponent } from './update-camion/update-camion.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { camion } from './model/camion.model';
import { camionGuard } from './camion.guard';
const routes: Routes = [
{path: "camions", component : CamionsComponent},
{path: "add-camion", component : AddCamionComponent,canActivate:[camionGuard]},
{ path: "", redirectTo: "camions", pathMatch: "full" },
{path: "updateCamion/:id", component : UpdateCamionComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
