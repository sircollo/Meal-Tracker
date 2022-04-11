import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meal:Meal[]=[
    new Meal(1,"Chicken",239,"Bought from Chicken inn"),
    new Meal(2,"Pizza",266,"Bought from Pizza inn")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
