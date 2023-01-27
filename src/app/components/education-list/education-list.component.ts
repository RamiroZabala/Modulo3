import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit{

  data:any;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getData().subscribe(dataService => {
      this.data = dataService.education;
    });
  }

  /*educationlist: any [];
  constructor(){
    this.educationlist = [
      {title: "Programador Web Full Stack Jr", description: "YoProgramo 4ta Edición (INTI)", period: "2022 - En curso",icon:"APLogo-20-20.png"},
      {title: "Secundario", description: "Escuela de enseñanza media Nº436 - Juan Mantovani", period: "2000 - 2005",icon:"LogoEESO436.png"}
    ]
  }*/
  
}
