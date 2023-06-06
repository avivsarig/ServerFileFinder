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

2. Type input starting with 'http://mock-server/' - full folder/file tree is available in 'Under the hood' section

## How to run the tests

1. Use command-line interface to run `npm run test`

## Under the hood

1. **`isValidURL.js`** is checking whether the input string can be parsed into a valid URL class using `new URL(input);`. This function is limited to URL's starting with `*:`

2. **`requestThrottling.js`** limits the execution of the passed func to no more than once every delay milliseconds. It returns a new function that, when invoked, either returns undefined if called too soon or the result of func otherwise.

3. **`serverCom.js`** is checking whether the path leads to one of the files or folders in the tree below:

/
├── animals/
│   ├── dogs/
│   │   ├── sausage_dog.jpg
│   │   ├── supermodel_pup.jpg
│   │   └── ninja_chihuahua.jpg
│   └── cats/
│       ├── fancy_feline.jpg
│       ├── sassy_siamese.jpg
│       └── lazy_lion.jpg
├── food/
│   ├── fruits/
│   │   ├── magical_mango.txt
│   │   ├── banana_bandit.txt
│   │   └── orange_overlord.txt
│   └── vegetables/
│       ├── carrot_conqueror.txt
│       ├── tomato_terminator.txt
│       └── potato_paladin.txt
└── music/
    ├── rock/
    │   ├── air_guitar_anthem.mp3
    │   ├── headbanging_hero.mp3
    │   └── queen_of_riffs.mp3
    └── pop/
        ├── dancing_diva.mp3
        ├── melody_maverick.mp3
        └── bieber_fever.mp3

