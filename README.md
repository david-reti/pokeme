# PokéMe - Nascent Project

This is my version of the take home project for Nascent digital, which consists of a simple web app to collect information about the user, and allow them to select their favourite Pokémon. One of the most interesting parts of software development is the set of tradeoffs made in the process, and I have documented some of my thoughts and philosophies in this document, as well in code comments.

## General Approach

Software development involves answering a few important questions, which reduce the amount of agonizing in development, if you're lucky. One of these questions is: "How much do I need this?". It's an interesting question, because on one hand it highlights the fact that dependencies make you dependent on a package and on the other hand, it's important to think ahead and ease the possible scaling and improvement of the software.

Keeping this in mind, I follow a somewhat minimal approach to development in which I focus on delivering the purest possible expression of an idea. I have used icon libraries, CSS preprocessors etc. in the past, but I don't think they are necessary for this project and have stuck with defaults whenever possible.   

## Libraries Used

- React Router (React doesn't have routing built-in and this is the most popular solution)
- Joi (Validation can be tricky to get right when working fast, and this library helps)

## Known Bugs

- ~~When filtering the list of pokemon, the entire background resizes which is an annoying effect. This could be fixed by using empty placeholder elements or setting a minimum height on the search results, or having a seperate background element but I don't like that look either - needs a little more experimentation.~~ - Fixed

# Create React App Starter Documentation

The section below is a copy of the documentation for a React starter project. I have included this documentation to serve as a reference, and as this project doesn't involve changes to the underlying framework, it is still valid. In a real project I might rewrite parts of it to align with the build process. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
