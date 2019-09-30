import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImagePage } from '../pages/image/image';

import { CanvasDraw } from '../components/canvas-draw/canvas-draw';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagePage,
    CanvasDraw,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ImagePage
  ],
  providers: []
})
export class AppModule {}
