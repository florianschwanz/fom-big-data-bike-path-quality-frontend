// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCz3vjBS8vMfrWsyDaJm-9f6Df1cVzzfpg',
    authDomain: 'bike-path-quality.firebaseapp.com',
    projectId: 'bike-path-quality',
    storageBucket: 'bike-path-quality.appspot.com',
    messagingSenderId: '974335716794',
    appId: '1:974335716794:web:f3eb2f483c08c9ee098183'
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYmlrZXBhdGgtcXVhbGl0eSIsImEiOiJja25zbjFjaGwyZWNvMnZwcjloNmd4dXc5In0.qWYKDWYq-cZhT2AGUZZPQA'
  },
  github: {
    resultsUrl: 'https://raw.githubusercontent.com/fom-big-data-bike-path-quality/fom-big-data-bike-path-quality-data/main/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
