import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  file:any;
  
  fileChanged(e:any) {
      this.file = e.target.files[0];
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        console.log(fileReader.result);
      }
      fileReader.readAsText(this.file);
  }
}
