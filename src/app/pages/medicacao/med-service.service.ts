import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class MedServiceService {

  constructor(private localNotifications: LocalNotifications) { }

  /*  
  this.localNotifications.schedule({
    id: 1,
    text: 'Single ILocalNotification',
    sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
    data: { secret: key }
  });
  */

}
