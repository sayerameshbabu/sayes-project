import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  course;
  tabs = [
    {
      name: 'Edit Profile',
      link: 'edit-profile'
    },
    {
      name: 'Change Password',
      link: 'change-password'
    },
    {
      name: 'Invoices',
      link: 'invoices'
    },
    {
      name: 'Certificates',
      link: 'certificate'
    },
  ];
  constructor(
  ) { }

  ngOnInit(): void {
  }
}
