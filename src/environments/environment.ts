// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	apiBase: 'https://feedclap.herokuapp.com',
	firebase: {
		apiKey: "AIzaSyCdzMxdhptmEDY3fppi8g6PqaNjTe0OnA4",
		authDomain: "feedclap.firebaseapp.com",
		projectId: "feedclap",
		storageBucket: "feedclap.appspot.com",
		messagingSenderId: "605589496425",
		appId: "1:605589496425:web:69ffd601fa426c49a238f8",
		measurementId: "G-GZ72H24KD3"
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
