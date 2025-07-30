# eilishballet

`https://console.firebase.google.com/u/4/project/eilishballet/overview`

# Firebase Hosting Setup: Steps

Install firebase tool `npm install -g firebase-tools`.
Initilize Firebase: `firebase init`.
Login to Firebase using CLI: `firebase login`.

`npm install --force`

Deploy Hosting: ng build, then 'firebase deploy --only hosting' (Root) 
(if there is an error, try: 'firebase login --reauth')
Deploy functions: build:ssr > cd function > firebase deploy --only functions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
