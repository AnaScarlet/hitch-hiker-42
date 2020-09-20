import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { emit } from 'process';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponentFormControl implements OnInit {

  @Output() userQuestionEvent = new EventEmitter<string>();

  private question: string;

  mainFormGroup = new FormGroup({
    mainComponentFormControl : new FormControl('What is the answer to the ultimate question of Life, the Universe and Everything?')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value : any) {
    console.log("Submission event");
    console.log(value)
    this.userQuestionEvent.emit(value)
  }

}
