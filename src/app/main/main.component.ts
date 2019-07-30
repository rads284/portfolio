import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  ngOnInit() {
  }

  constructor() {
  }
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'white'},
    {text: 'Two', cols: 1, rows: 2, color: 'white'},
    {text: 'Three', cols: 1, rows: 1, color: 'white'},
    {text: 'Four', cols: 2, rows: 1, color: 'white'},
  ];
  public aboutMe = false;
  public skills = false;
  public skills_list = ["Python", "Flask", "C", "Linux", "AWS","Angular", "Node", "SQL", "NoSQL", "Docker","R", "C++", "Java", "Openstack","Hadoop", "Spark"];
  showAboutMe(){
    this.skills = false;
    this.aboutMe = true;
  }
  showSkills(){
    this.skills = true;
    this.aboutMe = false;
  }
}
