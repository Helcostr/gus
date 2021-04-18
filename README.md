# gus_project_cli
The **Guild Ultimate Search** is an advanced guild search tool for Habitica.

This is a static webpage tool that is built using [Node.js](https://nodejs.org/en/ "Node.js"). See below for instructions on how to contribute to this project.
## Project setup
You will need to:
* install [Node.js](https://nodejs.org/en/ "Node.js") (available on Windows, macOS, Linux).
* load this git project onto you computer

When Node.js has finished installing, use your computer terminal (Windows: "Command Prompt or PowerShell", macOS and Linux: "Terminal") to navigate into where the git project is located on your local computer:

* Windows
 * `cd <folder_name>` step into the folder name
 * `cd ..` step out of the current folder
 * `dir` list all folders (and files) to understand where you are now
* Linux/macOS
 * `cd <folder_name>` step into the folder name
 * `cd ..` step out of the current folder
 * `ls` list all folders (and files) to understand where you are now

*(Note: don't forget to git checkout this branch, as this section is currently a branch)*

Once you have navigated into where the git project is located on your computer (you should beable to see a `package.json` file) run the following to set up all the dependencies:

```
npm install
```

### Compiles and hot-reloads for development
With the project set up, you can now edit the project. While in the same folder as `package.json`, type:
```
npm run serve
```
This will allow you to set up a local server to see/test your changes live.

### Compiles and minifies for production
When the project is all done, it is time to build the project
```
npm run build
```
This will take the whole project and build it for deployment. Once the project is built, Node.js is no longer needed to make the project work. To make changes, delete the `/dist` folder and build the project again.

### Lints and fixes files
To normalize the coding styles between several programmers, linting is important to keep the code nice and readable. To execute a lint, type:
```
npm run lint
```
