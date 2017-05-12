import { Component , OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyByXKWGaQuaOzyq6EmZXLO_qW1o5K1YAEE",
      authDomain: "udemycookbook.firebaseapp.com",
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
