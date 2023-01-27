import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  data:any;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getData().subscribe(dataService => {
      this.data = dataService;
    });
  }
}
