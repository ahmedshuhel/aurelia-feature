import {Aurelia, ViewLocator} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('src/features/feat1')
    .feature('src/features/feat2/main.ts')
    .feature('src/features/well');

  aurelia
  .start()
  .then(function(){ 
     aurelia.setRoot('src/app.ts');
  });
}
