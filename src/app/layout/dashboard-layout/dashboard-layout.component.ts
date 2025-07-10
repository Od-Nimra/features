import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
  sidebarOpen = true;
  mobileSidebarOpen = false;
  showLogoutModal = false;

  constructor(private router: Router) {}

  menuItems = [
    { path: '/home', label: 'Home', icon: 'assets/house.png' },
    { path: '/timetable', label: 'Timetable', icon: 'assets/calendar-check-2.png' },
    { path: '/events', label: 'Events RSVP', icon: 'assets/ticket-check.png' },
    { path: '/absence', label: 'Absence Application', icon: 'assets/sticky-note.png' },
    { path: '/calendar', label: 'Calendar', icon: 'assets/calendar-days.png' },
    { path: '/profile', label: 'Profile', icon: 'assets/icons/profile.svg' }
  ];

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleMobileSidebar() {
    this.mobileSidebarOpen = !this.mobileSidebarOpen;
  }

  closeMobileSidebar() {
    this.mobileSidebarOpen = false;
  }

  openLogoutModal() {
    this.showLogoutModal = true;
  }

  cancelLogout() {
    this.showLogoutModal = false;
  }

  confirmLogout() {
    this.showLogoutModal = false;
    // ✅ Actual logout logic
    localStorage.clear(); // Clear session/token
    this.router.navigate(['/login']); // Redirect to login (must be routed)
  }
}
