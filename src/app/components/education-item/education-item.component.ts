import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {
  @Input() title: string = "title here";
  @Input() description: string = "description here";
  @Input() period: string = "period here";
  @Input() icon: string = "";
}
