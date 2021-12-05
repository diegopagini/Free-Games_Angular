// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'free-games-angular',
    appId: '1:89624462424:web:a9e3b1a3cca2e58645762d',
    storageBucket: 'free-games-angular.appspot.com',
    apiKey: 'AIzaSyB_IIh5ASGNIxVIdsGCO7Wewu2dp0udVeI',
    authDomain: 'free-games-angular.firebaseapp.com',
    messagingSenderId: '89624462424',
  },
  production: false,
  baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
