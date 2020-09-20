import { Component} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  computerAnswer = "";

   constructor(private deviceService: DeviceDetectorService) {
  }

  ngOnInit(){
    var height = window.screen.height;
    document.getElementById("computer-image-container").setAttribute("height", height.toString());
    var deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile() || this.deviceService.isTablet();
    if (isMobile) {
      console.log("On mobile.")
      document.getElementsByClassName("all")[0].setAttribute("class", "all all-mobile")
      document.getElementById("question-title").setAttribute("class", "all-mobile")
    }
    else {
      console.log("On Desktop")
    }
  }

  async receiveUserQuestionEvent(event: string) {
    var question: string = event;
    document.getElementById("computer-output").setAttribute("class", "glow");
    this.computerAnswer = "...";
    await new Promise(r => setTimeout(r, 500));
    this.computerAnswer = this.computeAnswer(question).toString();
    await new Promise(r => setTimeout(r, 500));
    document.getElementById("computer-output").removeAttribute("class");
  }

  computeAnswer(question: string) {
    var s1: string = question.toUpperCase().replace(/\ /g, "");
    console.log(s1);

    var i: number;
    var arr1: number[] = [];
    for (i = 0; i < s1.length; i++) {
      arr1[i] = s1.charCodeAt(i) - 33;
    }
    console.log(arr1.sort());

    var mean: number = arr1.reduce((a, b) => a + b) / arr1.length;
    console.log(mean);
    return Math.trunc(mean);
  }

}
