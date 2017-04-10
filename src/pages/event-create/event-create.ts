import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventData } from '../../providers/event-data';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {
postPicture: any = null;

  constructor(public navCtrl: NavController, public eventData: EventData, public cameraPlugin: Camera) {}

  createEvent(eventName: string,  eventCaption: string, eventHashtags: string) {
    this.eventData.createEvent(eventName, eventCaption, eventHashtags).then( () => {
      this.navCtrl.pop();
    });
  }


    takePicture(){
    this.cameraPlugin.getPicture({
      quality : 95,
      destinationType : this.cameraPlugin.DestinationType.DATA_URL,
      sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: this.cameraPlugin.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.postPicture = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

}
