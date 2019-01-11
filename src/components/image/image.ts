import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'image',
  templateUrl: 'image.html'
})
export class ImageComponent {

  text: string;

  src: any = "https://i.stack.imgur.com/8l52T.png";

  constructor(public navParams: NavParams) {
    console.log('Hello ImageComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit() {
    this.src = this.navParams.data;
  }

}
