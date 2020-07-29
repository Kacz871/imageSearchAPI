import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-hint',
  templateUrl: './input-hint.component.html',
  styleUrls: ['./input-hint.component.css']
})
export class InputHintComponent implements OnInit {

  public hint = [];

  constructor() { }

  ngOnInit(): void {
  }

}
