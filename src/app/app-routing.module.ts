import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sprint-dashboard',
    loadChildren: () =>
      import('./modules/sprint-dashboard/sprint-dashboard.module').then(
        (m) => m.SprintDashboardModule
      ),
  },
  {
    path: '**',
    redirectTo: 'sprint-dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
