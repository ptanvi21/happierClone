import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  name: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: "Sat, 01-Jan-2022" , name: "New Year's Day"},
  {date: "Fri, 14-Jan-2022" , name: "Makar Sankranti / Pongal"},
  {date: "Wed, 26-Jan-2022" , name: "Republic Day (India)"},
  {date: "Fri, 18-March-2022", name: "Dhuleti (The day after Holi)"},
  {date: "Sun, 01-May-2022" , name: "Labor Day (India)"},
  {date: "Mon, 15-Aug-2022", name: "Independence Day (India)"},
  {date: "Fri, 19-Aug-2022", name: "Janmashtami" },
  {date: "Wed, 31-Aug-2022", name: "Ganesh Chaturthi"},
  {date: "Tue, 25-Oct-2022", name: "Diwali - Laxmi Pujan"},
  {date: "Wed, 26-Oct-2022", name: "Diwali - Additional"},
  {date: "Thu, 27-Oct-2022", name: "Diwali - Bhai Dooj"},
  {date: "Sun, 01-Jan-2023", name: "New Year's Day"},
  {date: "Thu, 26-Jan-2023", name: "Republic Day (India)"},
  {date: "Wed, 08-Mar-2023", name: "Dhuleti (The day after Holi)"}
  
];


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {

  selected = 'option2';
  displaySend = false;
  change = true;
  isOpen = true;
  isDefault = true;
  isContCard = true;

  constructor() { }

  ngOnInit(): void {
  }

  showSend(){
    this.displaySend = !this.displaySend;
  }

  changeColor(){
    this.change = !this.change;
  }

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

  showDefault(){
    this.isDefault = this.isDefault;
  }

  defaults = [
    {
      title: 'What is Searce',
      img: 'https://storage.googleapis.com/happierhr-common/567f4994-a389-4c9f-a74d-2898b40a22ef'
    },
    {
      title: 'Culture Code',
      img: 'https://searce.happierwork.com/hw-assets/media/svg/material_icons/ic_people_24px.svg'
    },
    {
      title: 'Contacts @ Searce',
      img: 'https://storage.googleapis.com/happierhr-common/af3f0ddb-c93d-4315-a68c-d5c0d9f4273c'
    },
    {
      title: 'Insurance Policy',
      img:'https://storage.googleapis.com/happierhr-common/dcb1010f-7866-4068-ae1d-5bee9e4ad92e'
    },
    {
      title: 'Company Policies',
      img: 'https://storage.googleapis.com/happierhr-common/22aae2f0-37ac-4cee-9df7-c7cb0a6b58b6'
    },
    {
      title: 'Referral Policy',
      img: 'https://storage.googleapis.com/happierhr-common/7ef6f16f-242b-4523-8eb2-d2c6ae590a0f'
    },
    {
      title: 'Pep',
      img: 'https://img.icons8.com/material-outlined/384/link--v1.png'
    },
    {
      title: 'Talks at Searce',
      img: 'https://storage.googleapis.com/happierhr-common/8b68bf16-a29d-41aa-a38b-00fe2b4f36fc'
    },
    {
      title: 'Delivery',
      img: 'https://storage.googleapis.com/happierhr-common/379d5660-040d-485b-9379-04f8b20be933' 
    },
    {
      title: 'Spirit of Searce',
      img: 'https://storage.googleapis.com/happierhr-common/7a81fbfc-ccaa-4fb0-9904-fae7dbd4243b'
    },
    {
      title: 'Service Delivery Portal',
      img: 'https://storage.googleapis.com/happierhr-common/41e37316-a423-424c-832a-c717949a8ea8'
    },
    {
      title: 'Maps',
      img: 'https://storage.googleapis.com/happierhr-common/f3ec10e5-a671-4618-8036-8c3bf9ee6dff'
    },
    {
      title: 'happierWork',
      img: 'https://storage.googleapis.com/happierhr-common/2e33de78-29cf-430f-87ff-8a7890dcc033'
    },
    {
      title: 'Workplace',
      img: 'https://storage.googleapis.com/happierhr-common/de90fde1-ccf3-4407-bbde-7ee90c74871b'
    },
    {
      title: 'Google Cloud Platform',
      img: 'https://storage.googleapis.com/happierhr-common/569cc29d-06c2-4ba2-ac2a-d05ae5e4be03'
    },
    {
      title: 'Chromebox',
      img: 'https://storage.googleapis.com/happierhr-common/ff6c299f-533a-4bf0-9365-0903d14aa064'
    },

  ];

  showContCard(){
    this.isContCard = !this.isContCard
  }

  displayedColumns: string[] = ['date', 'name'];
  dataSource = ELEMENT_DATA;


}
