# Lab Notes

## Idioma/Language
- [Español](#español)
- [English](#english)

---

## Español

## Índice

- [Introducción](#introduccion)
- [Definición del producto](#definición-del-producto)
- [Historias de Usuario](#historias-de-usuario)
- [Prototipos](#prototipos)
- [Documentación](#documentación)
- [CheckList](#checklist)
- [Extras](#extras)


## Introducción
Este proyecto fue realizado durante el Bootcamp de Laboratoria, sede Guadalajara Generación 003, durante el reto de crear una Red Social. Este proyecto tuvo una duración de 3 semanas divididas en sprints(uno por semana).


## Definición del producto

## Historias de Usuario
#### Historia de usuario 1
Yo como usuario necesito una web-app donde pueda registrarme e iniciar sesión con mi correo electrónico.

**DoD**
- Se puede crear un usuario y almacenarlo en firebase
- Se verifica con un correo electrónico el usuario creado
- Se puede iniciar sesión con correo electrónico y contraseña

#### Historia de usuario 2
Yo como usuario puedo iniciar sesión con mi cuenta de Google y Facebook

**DoD**
- Se puede crear un usuario e iniciar sesión con la cuenta de Google del usuario
- Se puede crear un usuario e iniciar sesión con la cuenta de Facebook del usuario

#### Historia de usuario 3
Yo como usuario puedo acceder a la página principal de mi web-app y desde ella puedo cerrar mi sesión para salir

**DoD**
- Se puede cerrar sesión y volver a la página de inicio de sesión

#### Historia de usuario 4
Yo como usuario puedo crear notas para recordar ciertas cosas, y estas notas se visualizan en mi página principal

**DoD**
- Se puede escribir una nota nueva y agregarla a firestore
- Las notas escritas se visualizan en tiempo real en la página principal

#### Historia de usuario 5
Yo como usuario quiero editar cualquier nota y guardar los cambios

**DoD**
- Las notas se pueden editar al hacer click en el botón creado para ello
- Los cambios hechos al editar se guardan en firestore y se actualizan en tiempo real en la página principal

#### Historia de usuario 6
Yo como usuario quiero borrar cualquier nota

**DoD**
- Las notas pueden borrarse al hacer click en el botón creado para ello
- Se pide una confirmación antes de borrar definitivamente la nota

#### Historia de usuario 7
HACKER EDITION
Si la usuaria empieza a escribir una nota y por alguna razón la pestaña del navegador se cierra, cuando vuelva a abrir esta, la nota debería mostrarse como estaba.

**DoD**
#### Historia de usuario 8
HACKER EDITION
Puedo ver el número de veces que he editado mi entradas/posts

**DoD**
#### Historia de usuario 9
HACKER EDITION
Puedo subir imágenes

**DoD**
#### Historia de usuario 10
HACKER EDITION
Consumo de API/s (Google Maps, Spotify, Pinterest, etc)

**DoD**
#### Historia de usuario 11
HACKER EDITION
Progressive Web App (PWA)

**DoD**

## Prototipos
## Documentación
## CheckList
## Extras

---
## English

## Index

- [Introduction](#introduction)
- [Product definition](#product-definition)
- [User Stories](#user-stories)
- [Prototypes](#prototypes)
- [Documentation](#documentation)
- [CheckList](#checklist)
- [Additional features](#Additional-features)


## Introduction
This project was made during the Laboratory Bootcamp, at Guadalajara in Generation 003, during the challenge of creating a Social Network with Firebase and React. This project lasted 3 weeks divided into sprints (one per week).


## Product definition

## User Stories
#### User Story 1
As a user I need a web-app where I can register and log in with my email.

** DoD **
- You can create a user and store it in firebase
- The user created is verified with an email
- You can log in with email and password

#### User Story 2
As a user I can log in with my Google account and Facebook

** DoD **
- You can create a user and log in with the user's Google account
- You can create a user and log in with the user's Facebook account

#### User Story 3
As a user I can access the main page of my web-app and from it I can close my session to exit

** DoD **
- You can log out and return to the login page

#### User Story 4
As a user I can create notes to remember certain things, and these notes are displayed on my home page

** DoD **
- You can write a new note and add it to firestore
- Written notes are displayed in real time on the main page

#### User Story 5
As a user I want to edit any note and save the changes

** DoD **
- The notes can be edited by clicking on the button created for it
- Changes made when editing are saved in firestore and updated in real time on the home page

#### User Story 6
I as a user want to delete any note

** DoD **
- The notes can be deleted by clicking on the button created for it
- A confirmation is requested before permanently deleting the note

#### User Story 7
HACKER EDITION
If the user begins to write a note and for some reason the browser tab closes, when she reopens it, the note should be displayed as it was.

** DoD **
#### User Story 8
HACKER EDITION
I can see the number of times I have edited my posts / posts

** DoD **
#### User Story 9
HACKER EDITION
I can upload images

** DoD **
#### User Story 10
HACKER EDITION
API / s consumption (Google Maps, Spotify, Pinterest, etc.)

** DoD **
#### User Story 11
HACKER EDITION
Progressive Web App (PWA)

** DoD **

## Prototypes
## Documentation
## Check list
## Additional features


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
