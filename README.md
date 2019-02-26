# MyReads React FENDproject 
---

## Table of Contents

- [Project Overview](#ProjectOverview)
- [Built With](#BuiltWith)
- [Installation](#Installation)
- [What You're Getting](#WhatYou'reGetting)
- [Backend Server](#BackendServer)
- [Important](#important)
- [External Code Used in this Project](#ExternalCodeUsedinthisProject)
- [Credits and Acknowledgements](#creditsandacknowledgements)
- [Contributing](#contributing)
- [LICENSE](#LICENSE)
- [Author](#Author)


## Project Overview

A myreads book tracking and book organisation app built with React. The app allows the user to select and categorize books into 3 shelves 1: read 2:currently reading, or 3: want to read. Udacity provided an API server and client library that is used to present information as the user interacts with the application.

## Built With

Languages:

React
Create React App
JavaScript ES6 & ES5
HTML
CSS

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Installation

1. Fork and clone this repository to your local computer.
2. Next you need to open GitBash
3. Check if you have node.js installed run ```node -v``` if you do not have node download it as it has npm installed in it and you need npm 
4. once you verify you have node.js installed cd into the project 
5. To get started developing right away add the dependencies and start a server by

* install all project dependencies with the command ```npm install```

* start the development server with with the command ```npm start```

6. With your server running, visit the site: `http://localhost:3000`, and enjoy interacting with the application

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## External Code Used in this Project

Some Code reused or bits taken from the following sources:
The starter code for this project comes from the following Udacity GitHub address of https://github.com/udacity/reactnd-project-myreads-starter repo and I forked and cloned it.
From Maeva my classmates tutorial on youtube see https://www.youtube.com/watch? v=i6L2jLHV9j8 and help from my fellow student Daniela Kuester 
who has being a contstat support.

## Credits and Acknowledgements

The Udacity course work and team, Maeva and the rest of my students who supported me along the way. Especially help from my fellow student Daniela Kuester who has being a contstat support. Thank you for all your help. 

## Contributing

This repository is one of my projects as a Udacity student. Therefore, I most likely will not accept pull requests.

For details, look at the file in his repo called [CONTRIBUTING.md](CONTRIBUTING.md) in this project repository.

## License

(c) Martha Taylor 2018.

This repository is licensed under the [MIT license](https://choosealicense.com/licenses/mit/#). For further information see the [LICENSE.txt](LICENSE.txt) file in this project repository.

## Author

Martha Taylor

