import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import  Tesseract   from 'tesseract.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myPhoto: any
  myNotes: string
  constructor(public navCtrl: NavController, private camera: Camera) {
    this.myPhoto = "../../assets/imgs/test4.jpg";
    
    
  }

  readImage(image: any) {
    Tesseract.recognize(image)
      .progress(message => console.log(message))
      .catch(err => console.error(err))
      .then(result => {
        this.myNotes = result.text;
      });
      
  }
  convertNotes()
  {
   /* const options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
       this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      });*/
    this.readImage(this.myPhoto);
  }
}
