import { CompanyComponent } from './views/company/company.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component'
import { VideosComponent } from './views/videos/videos.component';
import { ClientsComponent } from './views/clients/clients.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clientes',
    component: ClientsComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'empresa',
    component: CompanyComponent,
  },
  {
    path: 'faleconosco',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
