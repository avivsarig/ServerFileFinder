# Server File Finder

Server File Finder is a small JavaScript Client-Side component for checking if a file or directory exists at a given URL.

## Components

1. **`main.js`**: Handles user input and displays the result in the web page.

2. **`serverCom.js`**: Responsible for sending requests to the server.

3. **`isValidURL.js`**: Contains a utility function to validate URLs.

4. **`requestThrottling.js`**: Implements request throttling to prevent excessive requests to the server.

## How to Setup

1. Download and install Node.js from [@Node.js website](https://nodejs.org/e)

2. Create a new folder and download all files to it.

3. Use the command-line interface to navigate to project directory

4. Run `npm install`

## How to Run

1. Use command-line interface to run `npm run start`

## How to run the tests

1. Use command-line interface to run `npm run test`

## Under the hood

1. **`isValidURL.js`** is checking whether the input string can be parsed into a valid URL class using `new URL(input);`. This function is limited to URL's starting with `*:`

2. **`requestThrottling.js`** limits the execution of the passed func to no more than once every delay milliseconds. It returns a new function that, when invoked, either returns undefined if called too soon or the result of func otherwise.
