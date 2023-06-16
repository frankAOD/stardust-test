import { Injectable } from '@angular/core';
import * as enigma from 'enigma.js';
import * as schema from 'enigma.js/schemas/12.170.2.json';

import { embed } from '@nebula.js/stardust';

@Injectable()
export class AppInitService {
  session: enigmaJS.ISession = enigma.create({
    schema,
    url: 'wss://sense-demo.qlik.com/app/',
    createSocket: (url: string) => new WebSocket(url),
  });
  public app!: EngineAPI.IApp;

  public qlikSelectionsInstance: any;

  constructor() {}

  Init() {
    return new Promise<void>((resolve, reject) => {
      this.session.open().then((result: any) => {
        result
          .openDoc('372cbc85-f7fb-4db6-a620-9a5367845dce')
          .then((app: EngineAPI.IApp) => {
            this.app = app;

            this.qlikSelectionsInstance = embed(this.app, {
              themes: [],
              context: {
                theme: 'light',
              },
              types: [],
            });

            resolve();
          });
      });
    });
  }
}
