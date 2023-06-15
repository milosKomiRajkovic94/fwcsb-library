# FWCSB (Football World Cup Score Board) as a simple library

## Code challange description

Code challange description is available at: "Coding Exercise v1.4 Frontend.pdf" file (useful info: to display .pdf file in VSCode IDE, use vscode-pdf extension).

## How I understand a task

So, when a user fils in the first two fields (names of teams), he clicks the "Start game" button then the next two fields are enabled (scores of teams), who were previously disabled, and the first two fields (names of the teams) are disabled. After entering score of the teams and clicking "Finish" game, is going to update the score list of "Football World Cup Score Board", who was previouisly empty. 

Why, I didn't count on some automatic infinite insertion of the data, is because of the names of the teams, who would most likely not be sensible or being repeated after a while even though that is not our wish. Also it said: "We are NOT looking for a REST API, a Web Service or Microservice. Just a simple  implementation."

# Project structure

Even though `create-react-app` tool is deprecated (https://blog.bitsrc.io/the-future-of-react-why-create-react-app-is-deprecated-and-hooks-are-the-future-83e8a087a325) from recently, and the usage of Next.js or Vite is advised to be used in order to increase the overall perforamnces of the app. I stil decided to use `create-react-app` in creation of the project, because of:

1. As stated in guidelines of task, we are not using any REST API, for our data, but local collections, so there is no need for SSR (server side rendering) as a performance booster, which are adventages of Next.js and Vite;

2. Keep it simple, was the guideline you put in the description of the code challenge task, so I strived for that. Because a CRA tool provides pure React project without any benefits or constraints of both Next.js or Vite;

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
