# Installation

## Prerequisites
Before we can install Angular-CLI we will have to get a few thing set up first. To run Angular-CLI we will need to install these 2 prerequisites first.

* **NodeJS** v4 or newer  
and
* **Typings** v1 or newer

[A detailed instruction on how to install NodeJS is available here.](//docs.npmjs.com/getting-started/installing-node)

After installing NodeJS there is just one thing left to do: Simply install **Typings** globally by running this command :
```
npm install -g typings
```
and wait for *npm* to do the dirty work.

---

## Installing Angular-CLI
Installing Angular-CLI is as simple as running this simple command : 

```
npm install -g @angular/cli@latest
```

---

## Installing required packages
Install all required npm packages by running this command from the command line in the project root folder (where the package.json is located).
```
npm install 
```

---

## Starting App

Angular-CLI comes pre-configured with a **Live Compile and Reload Server** for which you simply have to run :
```
ng serve
```
and after a few seconds your site will be live at `http://localhost:4200`.
