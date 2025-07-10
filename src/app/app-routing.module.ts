import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './home/home.component';
import { TimetableComponent } from './timetable/timetable.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AbsenceApplicationComponent } from './absence-application/absence-application.component';
import { CalendarComponent } from './calendar/calendar.component'; // ✅ Import CalendarComponent
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // ✅ Redirect root to home
      { path: 'home', component: HomeComponent },
      { path: 'timetable', component: TimetableComponent },
      { path: 'events', component: EventsListComponent },
      { path: 'events/:id', component: EventDetailsComponent },
      { path: 'absence', component: AbsenceApplicationComponent },
      { path: 'calendar', component: CalendarComponent }, // ✅ Added Calendar route
      { path: 'profile', component: ProfileComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
