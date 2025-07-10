import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  events = [
    { name: 'Sports Day', date: new Date(2025, 5, 8), location: 'Ground' },
    { name: 'Exhibition', date: new Date(2025, 6, 13), location: 'Hall A' },
    { name: 'Tech Fest', date: new Date(2025, 7, 5), location: 'Auditorium' }
  ];

  // Matches structure used in the template
  todaysClasses: {
    hour: string;
    course: string;
    faculty: string;
    room: string;
  }[] = [];

  constructor(private timetableService: TimetableService) {}

  ngOnInit(): void {
    this.todaysClasses = this.timetableService.getTodaysClasses();
  }
}
