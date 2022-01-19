import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1 } from './pages/page1.component';
import { Page2 } from './pages/page2.component';
import { Page3 } from './pages/page3.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-1', pathMatch: 'full' },
  { path: 'page-1', component: Page1 },
  { path: 'page-2', component: Page2 },
  { path: 'page-3', component: Page3 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }