﻿import { Injectable } from '@angular/core';
import { MeteoItem } from '../meteoItem';

import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MeteoService {

  constructor() { }


  getMeteo(name: string): Promise<any> {
    console.log('from service', name);

    let m = new MeteoItem();

    return fetch('https://demo.bilelz.fr/owmap/?q=' + name + '&units=metric&lang=fr&appid=664df90ac5a5995b4e40dd93a533dc3d')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        // test du code retour
        // 200 = OK
        // 404 = city not found 
        if (json.cod === 200) {
          return Promise.resolve(json);
        } else {
          m.weather = json;

          console.error('M�t�o introuvable pour ' + name
            + ' (' + json.message + ')');

          return Promise.reject('M�t�o introuvable pour ' + name
          + ' (' + json.message + ')');
        }

      });

  }
}