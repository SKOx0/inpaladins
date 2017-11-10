// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '(dev)',
  serverUrl: 'http://api.paladins.com/paladinsapi.svc',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'pt-BR'
  ],
  supportedPlatforms: [
    'PC',
    'PS4',
    'XBOX'
  ],
  hiRez: {
    serviceUrl: 'http://api.paladins.com/paladinsapi.svc/',
    devId: '2178',
    authKey: 'CAA73AEFB9B944BBBFBFA855EB230FF2'
  },
  firebase: {
    apiKey: 'AIzaSyA7mU9urfL2yqj_s_TxACxtKNeh4d3i1Wk',
    authDomain: 'inpaladins.firebaseapp.com',
    databaseURL: 'https://inpaladins.firebaseio.com',
    projectId: 'inpaladins',
    storageBucket: 'inpaladins.appspot.com',
    messagingSenderId: '384866595820'
  },
  defaultLanguageCodePaladins: '10'
};
