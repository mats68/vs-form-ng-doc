import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ApiComponent } from './pages/api/api.component';
import { ConceptsComponent } from './pages/concepts/concepts.component';
import { FeaturesComponent } from './pages/features/features.component';
import { InstallationComponent } from './pages/installation/installation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: FeaturesComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'api', component: ApiComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
