import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
})
export class TimetableComponent implements OnInit {
  fullTimetable: {
    day: string;
    entries: {
      hour: string;
      course: string;
      faculty: string;
      room: string;
    }[];
  }[] = [];

  constructor(private timetableService: TimetableService) {}

  ngOnInit(): void {
    this.fullTimetable = this.timetableService.getFullWeek();
  }
}
