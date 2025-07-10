import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { AbsenceApplicationComponent } from './absence-application/absence-application.component';
import { HomeComponent } from './home/home.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent,
    DashboardLayoutComponent,
    AbsenceApplicationComponent,
    HomeComponent,
    TimetableComponent,
    CalendarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
