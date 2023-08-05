# eCommerce-Application
Welcome to our eCommerce application! This platform replicates real-world shopping experiences in a digital environment. It's a comprehensive online shopping portal that provides an interactive and seamless experience to users. From product discovery to checkout, the application ensures a smooth journey for the user, enhancing their engagement and boosting their purchasing confidence.

Users can browse through a vast range of products, view detailed descriptions, add their favorite items to the basket, and proceed to checkout. It includes features such as user registration and login, product search, product categorization, and sorting to make the shopping experience more streamlined and convenient.

An important aspect of our application is that it's responsive, ensuring it looks great on various devices with a minimum resolution of 390px. This feature makes the shopping experience enjoyable, irrespective of the device users prefer.

Key pages in the application include:

- Login and Registration pages
- Main page
- Catalog Product page
- Detailed Product page
- User Profile page
- Basket page
  
About Us page:
The application is powered by CommerceTools, a leading provider of commerce solutions for B2C and B2B enterprises. CommerceTools offers a cloud-native, microservices-based commerce platform that enables brands to create unique and engaging digital commerce experiences.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint:es`
This script uses ESLint to check syntax and code style in files with .js, .jsx, .ts and .tsx extensions that are located in the "src" folder. ESLint is a static code analysis tool that allows you to identify and prevent potential errors and inconsistencies in coding style. When you run a script, it uses ESLint with the eslint-plugin-prettier plugin and the eslint-config-prettier configuration. This allows ESLint to automatically apply Prettier formatting rules to fix the code style. Thus, in effect, prettier is applied together with ESLint.

### `npm run lint:es:fix`
This script performs automatic correction of errors and code style in files using ESLint. It calls the "lint:es" script (which we described above) and adds the "--fix" option to the ESLint command. This allows ESLint to automatically fix all possible problems that can be fixed automatically, without developer involvement. For example, ESLint can fix spaces, quotes, indentation and other stylistic coding rules. It uses ESLint with the eslint-plugin-prettier plugin and the eslint-config-prettier configuration. This allows ESLint to automatically apply Prettier formatting rules to correct code style. So, in effect, prettier is applied together with ESLint to automatically format code.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## In order to install and run the project locally, you need: 
1. Need to have node.js version 18 or higher [download node.js](https://nodejs.org/).
2. Copy the project to yourself, you need to open the console and clone the repository with the command `git clone https://github.com/ElizavetaRazumenko/eCommerce-Application.git`.
3. Then execute `cd eCommerce-Application` in the console and change the `git checkout develop` branch.
4. Install the necessary npm packages `npm i`.
5. Start the project on the developer server `npm start`.


## The eCommerce-Application project is based on Create React App (CRA) using the following key technologies:

- React: A library for creating interfaces.
- React Router: Controls routing in the application.
- Material-UI: A library for Material Design components.
- Redux Toolkit: Simplified state management.
- Axios: HTTP request execution.
- ESLint and Prettier: Code analysis and formatting.
- Husky and Lint-staged: Code quality control before commits.