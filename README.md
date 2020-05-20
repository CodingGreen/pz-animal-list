# Planet Zoo Animal List

A static website for displaying a list of all animals available in the game Planet Zoo.
It allows users to sort animals by a number of properties to find just the animal they are looking for.

## Contributing data

If you'd like to help contribute data to the project please submit a pull request adding to the [json data file](https://github.com/CodingGreen/pz-animal-list/blob/master/src/data/animals.json).
Make sure you follow the format of the previous entries.

## Code quick start

If you'd like to use the code yourself then you'll need [Node](https://nodejs.org/en/) installed and then to follow these simple steps:
1. Clone the repository
2. Run `npm install`
3. Run `npm start`

Then you will have the website running on `localhost:8000`

## Commands

* `npm run build` - Create a production build of the project.
* `npm run clean` - Deletes the temporary files that Gatsby generates. Run this command if you are having issues in case it it related to caching.
* `npm run develop` - Starts a local server running the site with hot-reloading so that it updates as you write code.
* `npm run lint` - Runs the linter in order to spot common programming errors.
* `npm run lint:fix` - Runs the linter and automatically fixes any issue it is able to.
* `npm run serve` - Serves the production build created using `npm run build`
* `npm start` - Runs `npm run develop`
* `npm test` - Runs the test suite. However, there aren't any tests yet as this project was a learn exercise that didn't include testing. If you are writing production code you should write tests!!!