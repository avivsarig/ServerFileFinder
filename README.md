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

/ <br>
│<br>
├── animals/ <br>
│&emsp;│<br>
│&emsp;├── dogs/ <br>
│&emsp;│&emsp;│<br>
│&emsp;│&emsp;├── sausage_dog.jpg<br>
│&emsp;│&emsp;├── supermodel_pup.jpg<br>
│&emsp;│&emsp;└── ninja_chihuahua.jpg<br>
│&emsp;│<br>
│&emsp;└── cats/ <br>
│&emsp;&emsp;│<br>
│&emsp;&emsp;├── fancy_feline.jpg<br>
│&emsp;&emsp;├── sassy_siamese.jpg<br>
│&emsp;&emsp;└── lazy_lion.jpg<br>
├── food/ <br>
│&emsp;│<br>
│&emsp;├── fruits/ <br>
│&emsp;│&emsp;│<br>
│&emsp;│&emsp;├── magical_mango.txt<br>
│&emsp;│&emsp;├── banana_bandit.txt<br>
│&emsp;│&emsp;└── orange_overlord.txt<br>
│&emsp;│<br>
│&emsp;└── vegetables/ <br>
│&emsp;&emsp;│<br>
│&emsp;&emsp;├── carrot_conqueror.txt<br>
│&emsp;&emsp;├── tomato_terminator.txt<br>
│&emsp;&emsp;└── potato_paladin.txt<br>
└── music/ <br>
&emsp;│<br>
&emsp;├── rock/ <br>
&emsp;│&emsp;│<br>
&emsp;│&emsp;├── air_guitar_anthem.mp3<br>
&emsp;│&emsp;├── headbanging_hero.mp3<br>
&emsp;│&emsp;└── queen_of_riffs.mp3<br>
&emsp;│<br>
&emsp;└── pop/ <br>
&emsp;&emsp;│<br>
&emsp;&emsp;├── dancing_diva.mp3<br>
&emsp;&emsp;├── melody_maverick.mp3<br>
&emsp;&emsp;└── bieber_fever.mp3<br>
