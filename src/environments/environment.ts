// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyBjk5j_MK7F8W8kA8BwbE7kX77jN4NZEKY",
  authDomain: "bandcamp-replica-app.firebaseapp.com",
  databaseURL: "https://bandcamp-replica-app-default-rtdb.firebaseio.com",
  projectId: "bandcamp-replica-app",
  storageBucket: "bandcamp-replica-app.appspot.com",
  messagingSenderId: "566268153782",
  appId: "1:566268153782:web:656f9d5cca6db9a0c57b17"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
