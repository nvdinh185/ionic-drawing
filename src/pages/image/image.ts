import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'image',
  templateUrl: 'image.html'
})
export class ImagePage {

  src: any;

  constructor(public navParams: NavParams) {}
  
  ngOnInit() {
    this.src = this.navParams.data;
  }

}
