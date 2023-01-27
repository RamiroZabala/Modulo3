import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SectionComponent } from './components/section/section.component';
import { EducationListComponent } from './components/education-list/education-list.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SectionComponent,
    EducationListComponent,
    EducationItemComponent,
    SkillListComponent,
    SkillItemComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
