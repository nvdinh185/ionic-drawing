import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'image',
  templateUrl: 'image.html'
})
export class ImageComponent {

  text: string;

  src: any;

  constructor(public navParams: NavParams) {
    console.log('Hello ImageComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit() {
    this.src = this.navParams.data;
  }

}
