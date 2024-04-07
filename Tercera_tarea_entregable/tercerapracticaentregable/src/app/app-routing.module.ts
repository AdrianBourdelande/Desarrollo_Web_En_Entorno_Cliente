import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MakersComponent } from './components/makers/makers.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ShowcarmodelsComponent } from './components/showcarmodels/showcarmodels.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'makers',
    component: MakersComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'models/:id',
    component: ShowcarmodelsComponent
  },
  {
    path: '**',
    redirectTo: '/home',  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
