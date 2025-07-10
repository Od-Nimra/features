import { Component } from '@angular/core';

@Component({
  selector: 'app-absence-application',
  templateUrl: './absence-application.component.html'
})
export class AbsenceApplicationComponent {
  selectedForm: 'leave' | 'duty' = 'leave';
  loading = false;
  showToast = false;

  // Leave
  leaveName = '';
  leaveClass = '';
  leaveStart = '';
  leaveEnd = '';
  leaveReason = '';

  // On-Duty
  dutyName = '';
  dutyEvent = '';
  dutyDate = '';

  proofFile: File | null = null;

  timeSlots = [
    { label: 'Period 1', selected: false },
    { label: 'Period 2', selected: false },
    { label: 'Period 3', selected: false },
    { label: 'Period 4', selected: false },
    { label: 'Period 5', selected: false }
  ];

  onFileSelected(event: any) {
    this.proofFile = event.target.files[0];
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.proofFile = event.dataTransfer.files[0];
    }
  }

  removeFile() {
    this.proofFile = null;
  }

  async submitLeave() {
    this.loading = true;
    await new Promise((r) => setTimeout(r, 1500));
    this.loading = false;
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }

  async submitDuty() {
    this.loading = true;
    await new Promise((r) => setTimeout(r, 1500));
    this.loading = false;
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
