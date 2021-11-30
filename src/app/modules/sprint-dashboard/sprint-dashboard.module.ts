import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintDashboardRoutingModule } from './sprint-dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PreviewComponent } from './components/preview/preview.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [HomeComponent, PreviewComponent, UpdateComponent],
  imports: [
    CommonModule,
    SprintDashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
})
export class SprintDashboardModule {}
