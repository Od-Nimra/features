import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Nimra Sultana',
    email: 'nimra@student.kjc.edu',
    department: 'Computer Applications',
    semester: '5th',
    avatar: 'assets/images/avatar.jpg'
  };

  isEditing = false;
  isSaving = false;
  showLogoutModal = false;

  editProfile() {
    this.isEditing = true;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  saveProfile() {
    this.isSaving = true;
    setTimeout(() => {
      this.isSaving = false;
      this.isEditing = false;
      alert('Changes saved!');
    }, 1500);
  }

  onAvatarChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.avatar = reader.result as string;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  openLogoutModal() {
    this.showLogoutModal = true;
  }

  cancelLogout() {
    this.showLogoutModal = false;
  }

  confirmLogout() {
    this.showLogoutModal = false;
    alert('Logged out successfully!');
    // Add logout logic here: clear tokens, redirect, etc.
  }
}
