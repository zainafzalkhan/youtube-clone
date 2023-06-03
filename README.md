# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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



## Project specific steps

first setup npx create-react-app


## Add tailwind

install => npm i -D tailwindcss

## Init tailwind 
init    => npx tailwindcss init
this will generate the tailwind confg file
name: tailwind.config.js
in this file,we will tell our tailwind to what file needs to track in the content array
"./src/**/*.{js}" in our case

## base setup tailwind
    Add basic file ref in the app.css
    Files:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;



# Handle state 
    handleState using redux-toolkit
    cmd: npm i @reduxjs/toolkit

    install react-redux also
    cmd: npm i react-redux

# Steps for redux creation;
    step-1: craete store
    step-2: crate Slice
    step-3  assign slice to store
    step-4: provide store to app provider
    step-5: disptach event to update option state
    step-6: useSelector to get value


# Setup Router

    cmd: npm i react-router-dom

    =>createBrowserRouter , its the array of path object 
    =><RouterProvider router={appRouter} />
    =>useSearchParams() to get urs search data

# Higher Order Function 
    
    take component as argument and return compo also
    we use it modify it litte..
    like yt vidoes shows add 

    

# Search bar
    search bar is basically use to make request 
    for the data that is cx want, it may be exact 
    data or it may be suggested data..
    but this things happen in different manner
    one may type the whole string once , or may 
    write slowly,if we request on every stock key
    and search string contains 5 letter, the requst 
    would be 5 times , but the data come from last
    request is desirable,it meanse all 4 starting
    request is worthless.. to avoid this problem
    we use Debouncing....

        #Debouncing;

            we will request data on key stroke, if the difference b/w two stroke key is 200ms

    How i apply it in my project....
    i call request in useEffect after 200ms 
    useEffect depend on searchQ...
    on update searchQ state component rerender.
    and call return useeffect code.. where we clear 
    timer... everty time when use effect call, it will be creating new timer and remover older one


# Cache [to handle this we will use redux]