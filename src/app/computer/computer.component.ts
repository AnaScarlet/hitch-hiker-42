import { Component, OnInit, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  @Input() computerCalculationRequest: string;

  constructor() { }

  ngOnInit(): void {
  }

}
