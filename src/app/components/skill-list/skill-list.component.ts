import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit{

  data1:any;
  data2:any;
  data3:any;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getData().subscribe(dataService => {
      this.data1 = dataService.skills_frontend;
      this.data2 = dataService.skills_backend;
      this.data3 = dataService.skills_others;
    });
  }

  /*
  skilllist: any [];
  skilllist2: any [];

  constructor(){
    this.skilllist = [
      {title: "HTML5", value: 95},
      {title: "Javascript / Typescript", value: 90},
      {title: "PHP", value: 90},
      {title: "CSS3", value: 95},
      {title: "MySQL", value: 75},
    ];
    this.skilllist2 = [
      {title: "Photoshop", value: 80},
      {title: "Graficos Vectoriales", value: 90},
      {title: "Modelado y renderizado 3D", value: 75},
      {title: "Game Dev", value: 60},
    ];
  }*/
}
