import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { AppInitService } from '../app/shared/services/app-init.service';

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.Init();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true,
    },
  ]
};
