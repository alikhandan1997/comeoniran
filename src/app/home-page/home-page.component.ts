import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../service/home-page/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private homeService: HomePageService
    ) { }

  topLeader = [];
  topHotel = [];
  topTour = [];
  topCity = [];

  lastLeaders = [];
  lastHotels = [];
  lastTours = [];

  filter: string;


  ngOnInit() {
    this.getLeader();    
    this.getHotels();
    this.getTours();
    this.getCity();
  }

  getLeader = () => {
    this.filter = '?top=1';
    this.homeService.getLeader(this.filter).subscribe((data) => {
      this.topLeader = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
    this.filter = '?last=2';
    this.homeService.getLeader(this.filter).subscribe((data) => {
      this.lastLeaders = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
  }

  getHotels = () => {
    this.filter = '?type=hotel&last=4';
    this.homeService.getService(this.filter).subscribe((data) => {
      this.lastHotels = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
    this.filter = '?type=hotel&top=1';
    this.homeService.getService(this.filter).subscribe((data) => {
      this.topHotel = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
  }

  getTours = () => {
    this.filter = '?type=tour&last=4';
    this.homeService.getService(this.filter).subscribe((data) => {
      this.lastTours = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
    this.filter = '?type=tour&top=1';
    this.homeService.getService(this.filter).subscribe((data) => {
      this.topTour = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
  }

  getCity = () => {
    this.filter = '?last=1';
    this.homeService.getCity(this.filter).subscribe((data) => {
      this.topCity = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('topcity', this.topCity)
    })
  }

}
