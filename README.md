# PokéMe - Nascent Project

This is my version of the take home project for Nascent digital, which consists of a simple web app to collect information about the user, and allow them to select their favourite Pokémon. It's been a real pleasure working on it! I have listed some of my thoughts and assumptions in this document.

## General Approach

For this project I followed a somewhat minimal approach to development in which I focus on delivering the purest possible expression of an idea, at a high quality. I have used icon libraries, CSS preprocessors etc. in the past, but I don't think they are necessary for this project and have stuck with defaults whenever possible.   

## Design Notes

Generally, I try my best to create the best software I can. I had to take a couple of factors into consideration as I was developing this project:

- I couldn't find a way to filter API results for pokemon by name, and instead I handle the filtering by loading a big list of all the pokemon first - this is not the most efficient, and if I had more time I would optimize it.
- The address input is not validated as extensively as I would like - I intentionally made the rules loose to allow for flexibility. If I were starting from scratch, I would most likely use separate fields for address, city, province etc. which would also make validation easier.
- I have created a really simple backend to show that I can submit the results - it doesn't store any data, it only returns a success code. Storing both the backend and the frontend in the same repo, and especially in the same docker container is, in my opinion, not the best practice but I wanted to keep this project simple.

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
