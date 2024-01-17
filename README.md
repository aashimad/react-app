# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage
This project is designed in React Js with Typescript.
It is styled using material UI and material icons.

For state management Redux is used with Thunk Middleware for proper data serialization. 
Tried to utilize proper Modal/Constructor level structure for data consumption at components.

## project Structure
all project level constant are in constant.ts file
Modal/Constructor level data definations are in types folder
Api level handling are in utils
Redux store configuration are in store folder

Common UI components can be used through out applications are in common folder with component name folder(common\header\header.tsx)
Main pages are at pages folder

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


