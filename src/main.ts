import {Aurelia, ViewLocator} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('src/features');

  aurelia
  .start()
  .then(function(){ 
     aurelia.setRoot('src/app.ts');
  });
}
