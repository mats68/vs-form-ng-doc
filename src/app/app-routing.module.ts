import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ApiComponent } from './pages/api/api.component';
import { ConceptsBasicExamplesComponent } from './pages/concepts-basic-examples/concepts-basic-examples.component';
import { ConceptsLayoutComponent } from './pages/concepts-layout/concepts-layout.component';
import { ConceptsTablesComponent } from './pages/concepts-tables/concepts-tables.component';
import { ConceptsValidatoinComponent } from './pages/concepts-validatoin/concepts-validatoin.component';
import { FeaturesComponent } from './pages/features/features.component';
import { InstallationComponent } from './pages/installation/installation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: FeaturesComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'concepts', component: ConceptsBasicExamplesComponent },
  { path: 'validation', component: ConceptsValidatoinComponent },
  { path: 'tables', component: ConceptsTablesComponent },
  { path: 'layout', component: ConceptsLayoutComponent },
  { path: 'api', component: ApiComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
